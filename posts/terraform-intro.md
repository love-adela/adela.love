---
title   : 페미위키 오픈소스 활동으로 익히는 Terraform 첫 걸음
subtitle: Terraform과 Terraform Cloud 사용하기
date    : '2020-01-05'
---

Terraform은 인프라를 효율적으로 관리하기 위해 사용하는 도구입니다. 주로 AWS를 관리하기도 하고, Azure, GCP, Github 등 다양한 자원을 관리할 수 있습니다. 이번 글에서는 테라폼(Terraform)을 사용하는 방법을 첫걸음부터 소개해보도록 하겠습니다.

먼저 각 instruction과 예제는 [페미위키 인프라 오픈소스](https://github.com/femiwiki/infra/#instructions)와 [Terraform 공식문서](https://www.terraform.io/docs/index.html)를 활용했음을 밝힙니다.

## 1. Terraform 사용하기

### 1.1 Terraform Install

터미널에서 Terraform을 설치합니다.

```bash
brew install terraform
```

테라폼(Terraform)을 사용하려면 로컬에 `~/.aws/credential` 셋팅을 해 AWS에 직접 API를 쏴서 diff가 있는지 확인하는 방법도 있고, 테라폼 클라우드(Terraform cloud)를 쓰는 방법도 있습니다.

## 2. Terraform Cloud Setting

Terraform cloud를 사용하면 이론적으로 AWS 계정이 없어도 서버에 변화를 줄 수 있습니다.

### 2.1 Terraform Cloud 셋팅 과정

1. [https://app.terraform.io/app/settings/tokens](https://app.terraform.io/app/settings/tokens) 에서 토큰을 발급합니다.
2. **~/.terraformrc**에 아래와 같이 테라폼 토큰을 세팅합니다.

```hcl
credentials "app.terraform.io" {
token = "xxxxxxxxxxxxxx.atlasv1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
}
```

3. Terraform 프로그램을 실행하게 되면 **~/.terraform.d** 파일이 자동생성되는 것을 확인할 수 있습니다.
4. Terraform 프로젝트로 이동해 `terraform init`과 `terraform plan` 커맨드를 칩니다. Terraform 프로젝트란 ***.tf** 파일이 나열된 디렉토리를 의미합니다.
5. Terraform 프로젝트가 아닌 곳에서 `terraform` 커맨드를 치면 다음과 같은 에러메세지가 나옵니다.

> The directory has no Terraform configuration files. You may begin working with Terraform immediately by creating Terraform configuration files.

6. `terraform plan` 커맨드로는 실제 인프라가 변화되지 않습니다. 변화를 줘야 한다면 `terraform apply` 커맨드로 작성한 코드를 반영하시면 됩니다.
    - github으로 push 후 바로 `terraform apply` 커맨드가 실행되도록 CI를 설정할 수도 있습니다.

### 2.2 Terraform으로 AWS자원 생성하기

이번에는 Amazon S3를 생성해보도록 하겠습니다. Terraform에 코드를 몇 줄 추가함으로써 Terraform이 AWS랑 통신해서 이미 띄워져있는 AWS 자원과 비교해 새로 만들어야 하는 자원을 파악해 자동으로 생성하게 됩니다.
property 설정이 필요하다면 [Terraform provider property 설정 공식 문서](https://www.terraform.io/docs/providers/aws/r/s3_bucket.html#argument-reference)을 참고하여 추가하면 됩니다.

```hcl
resource "aws_s3_bucket" "uploaded_files" {
  # (필수) bucket명 작성
  bucket = "blah-uploaded-files"
}
```

## 3. Terraform Provider 살펴보기

앞서 Terraform은 여러 인프라를 관리할 수 있다고 소개했습니다. 심지어 custom cloud를 만들면 Terraform이 custom cloud를 지원하게금 할 수도 있습니다. 이 밖의 Terraform provider에 관한 자세한 소개는 [https://www.terraform.io/docs/providers/index.html](https://www.terraform.io/docs/providers/index.html)에서 확인할 수 있습니다. 참고로 Terraform provider는 Golang 오픈소스니 누구든 기여할 수 있어요!

### 3.1 Terraform provider의 장점

Terraform provider의 가장 큰 장점은 여러 프로바이더를 동시에 한 프로젝트에 쓸 수 있다는 것입니다. 특정 자원만 다른 프로바이더를 쓰도록 따로 설정할 수도 있습니다.

### 3.2 Terraform provider 특징

Terraform 프로바이더는 모두 semver([semantic versioning](https://semver.org/lang/ko/))를 사용합니다. semver란 버전의 형태를 비롯해 의미를 semantic하게 통일하는 것을 의미합니다.

- Terraform provider의 버전 형태
  - 프로그래머 필요에 의해 **ex) 1.2.3-alpha** 등을 붙일 수 있습니다.
  - 원한다면 빌드 번호도 붙일 수 있습니다. **ex) 1.2.3-alpha+1a2b4f**
  - 앞의 세자리에는 무조건 숫자가 와야 합니다. **ex) 123.123.123**
  - 앞의 세자리는 0으로 시작할 수 없습니다. **ex) 1.0011.002**
- Terraform provider 버전의 의미
  - 0.x.x 랑 1.x.x 이상의 버전이 다릅니다. 0.xx일 때에는 특별한 규칙이 없고 호환 여부도 프로그래머에 달려있습니다.
  - 1.0.0 이상부터 특정 규칙을 지키도록 강제합니다.
  - a.b.c 중 a를 메이저버젼, b를 마이너 버젼, c를 패치라고 하는데, 같은 메이저버전끼리는 무조건 하위호환(backward compatibility)을 지켜야 합니다. 마이너버전은 기능추가가 있을 때 올라가고, 패치는 기능추가 없이 버그픽스 시 올라갑니다.
- Terraform provider 버전 예시
  - `">= 2.30.0, < 3"`의 경우에는 메이저버젼이 3으로 올라가면 하위호환이 안됩니다.

### 3.3 Github Provider 선언

Terraform에 github을 사용하겠다는 걸 알려줘야 합니다.

```hcl
provider "github" {
  organization = "yologolo"
  version      = ">= 2.2.0, < 3"
}
```

Provider 옵션은 [https://www.terraform.io/docs/providers/aws/index.html](https://www.terraform.io/docs/providers/aws/index.html)에서 확인 가능합니다.

### 3.4 Github으로 PR보내기

로컬 브랜치에서 수정한 결과물을 `terraform plan`로 확인할 수 있듯, github에서도 확인이 가능합니다.
Pull request를 보낸 후 Details를 누르시면 PR을 머지했을 때 어떤 diff가 생기는지 확인할 수 있습니다.

## 4. 기타 Terraform 기능

### 4.1 [Terraform import](https://www.terraform.io/docs/import/usage.html)

이미 AWS, Azure 등으로 인프라 자원을 다 만들어둔 경우에는 어떻게 해야 할까요? 바로 `terraform import`를 사용하면 됩니다! (다만 `terraform import`를 지원하지 않는 자원도 있음에 유의하세요.)

앞서 새 자원을 생성하던 커맨드 `resource "aws_yolo" "foo" {}`를 보았는데요, Terraform import 기능을 활용하면 **foo** 라는 변수명과 기존 자원을 연결할 때 AWS 인프라를 수정하지 않고도 그대로 Terraform으로 관리할 수 있게 됩니다.

예를 들어, `terraform import aws_instance.lovely_adela i-12367483246`라는 커맨드를 사용하면 lovely_adela에 기존 인스턴스가 연결됩니다. 다만 경우에 따라서 인스턴스 id, arn, 이름 등을 사용하므로 사용 전 [사용법](https://www.terraform.io/docs/providers/aws/r/instance.html#import)을 확인해야 합니다.

### 4.2 Terraform lint

`terraform fmt`를 사용해보세요. 이 커맨드는 표준 형식과 스타일로 Terraform 구성 파일을 rewrite 하는데 사용됩니다.

### 4.3 Terraform File 사용법

- 변수명을 수정해야 할 때는 `terraform state mv`를 사용합니다. 만일 코드에서 변수명을 그냥 바꾸게 된다면, 기존 자원을 삭제하고 새 자원을 만드는 것으로 인식하니 주의가 필요합니다.
- `*.tf` 파일을 지우기 전에 `terraform state rm`을 해줘야 합니다. 코드에서 그냥 파일을 지우게 되면 그 자원을 정말로 삭제하게 됩니다. 만일 자원을 삭제하지는 않되, Terraform이 그 자원을 더이상 추적하지 않게 하려면 state를 사용해서 rm 명령을 사용해야 합니다.

주류 위키들의 남성 중심적이고 여성 혐오적인 정보에 반대하여 약자와 소수자를 위해 만들어진 여성주의 정보 집합체 [페미위키](femiwiki.com)는 언제든 여러분의 [오픈소스](https://github.com/femiwiki/femiwiki) 기여를 기다립니다. 페미위키는 모든 소스코드를 오픈소스로 공개하고 있고, [이슈트래커](https://github.com/femiwiki/femiwiki/issues)와 [대화 공간](https://discord.com/invite/qqdp3tjW?utm_source=Discord%20Widget&utm_medium=Connect)을 공개하고 있기 때문에 운영진이 아닌 분도 개발에 참여할 수 있습니다.
