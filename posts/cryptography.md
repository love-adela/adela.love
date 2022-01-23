---
title: '암호화의 역사'
subtitle: '대칭 키 암호화와 비대칭 키 암호화의 비밀들'
date: '2021-01-09'
---

낮말은 새가 듣고 밤말은 쥐가 듣는다고 하지만, 인간은 역사적으로 암호를 통해 비밀 정보를 주고받으려는 시도를 꾸준히 해왔습니다. 영화 '이미테이션게임(The Imitation Game)'을 보신 적이 있거나, 카이사르 암호(Caesar Cipher), 또는 RSA 암호를 들어본 적이 있으신가요? 이 용어들을 들어보신 적이 없더라도 선조 때부터 역사가 이어져 지금 우리들도 일상에서 암호와 밀접한 생활을 하고 있답니다.

## 1. 암호화에 쓰이는 용어들

### 1.1 대칭 키 암호화 (Symmetric-key Encryption)

대칭 암호화를 논하기 전에, 먼저 가벼운 용어 정리부터 해볼까 해요.

암호화 기법에는 여러 가지가 있는데요. 시간을 거슬러 올라가 옛날 사람들이 쓰던 방식을 먼저 소개하고자 합니다. 약 2,500년 전 스파르타 군대에서는 원통 막대기를 활용해 [스키테일](https://en.wikipedia.org/wiki/Scytale)이라는 암호 기법을 사용했고, 율리어스 시저(Julius Caesar)는 [카이사르 암호 기법](https://en.wikipedia.org/wiki/Caesar_cipher)을 사용했었답니다. 이번 글에서는 그중 카이사르 암호 기법의 컨셉을 살짝 엿보겠습니다.

![Caesar's Encryption](https://raw.githubusercontent.com/love-adela/adela.love/main/public/images/caesar.svg.png)

어떤 분은 규칙을 알아차리셨을지도 몰라요. 상단 알파벳의 순서를 *+3* 씩 밀려 쓰면 하단의 알파벳 순서가 나오는 방식입니다. 예를 들어 제가 **hello adela** 라는 비밀 메시지를 친구에게 전하려 해요. 비밀 메시지를 암호화하지 않고 그대로 보낸다면 메시지를 열어본 누구나 그 내용을 이해할 것입니다. 율리어스 시저는 상단의 알파벳 순서에 매칭 되는 하단의 알파벳으로 치환해 문장을 바꿔 비밀정보를 주고받았습니다. 이를테면 **hello adela** 대신, **khoor dghod**로 변환한 것이죠.

여기서 암호화가 되지 않는 문장('**hello adela**')을 평문(plain text)이라고 하고, 암호화된 문장('**khoor dghod**')을 암호문(cipher text)이라고 합니다. 앞서 평문 알파벳을 *+3* 씩 밀려 쓰면 암호문이 된다고 했는데, 여기서 숫자 *3*을 키(key)라고 한답니다. 이 키는 컴퓨터과학에서 **secret**으로도 불리니 함께 알아두세요. 평문을 암호문으로 만드는 방식을 암호화(encrypt), 반대로 암호문을 평문으로 바꾸는 방식을 복호화(decrypt)라고 합니다. 대칭 키 암호 알고리즘(Symmetetric-key Algorithm)에서는 암호화와 복호화에 같은 키를 쓴답니다.

알파벳이 몇 개씩 밀려 쓰였는지와 같은, 즉 key에 대한 정보가 알려지면 암호문이 해석되는 것은 시간문제일 것입니다. 이론적으로 key만 밝혀지지 않는다면 암호문이 공개되어도 복호화하지 못하게 됩니다. 영화 '이미테이션 게임(The Imitation Game)' 초반부에는 폴란드 암호국이 독일 군의 [에니그마](https://en.wikipedia.org/wiki/Enigma_machine)를 입수하고 암호문까지 도청하지만 24시간마다 에니그마의 키가 바뀌는 탓에 암호문을 해석하지 못하는 장면이 등장합니다. 에니그마의 키는 카이사르 암호의 키처럼 단순하지 않았습니다. 카이사르 암호의 키 시스템은 덧셈과 뺄셈 두 가지뿐이었기 때문에 모든 문자에 대한 조합을 찾아내면 결국에는 해독이 가능하다는 치명적인 단점이 있습니다. 그러나 에니그마의 키 시스템에는 3개의 로터(회전자, Rotor)가 있고, 각각의 로터가 26개의 원소로 순열을 이루고 있습니다. 즉, 로터의 처음 위치의 가짓수는 26^3(=17,576)이고, 이 로터를 임의로 변경할 수도 있어 에니그마 상태는 총 6*26^6(=1,853,494,656) 개나 될 수 있었습니다.

![Enigma, 에니그마](https://raw.githubusercontent.com/love-adela/adela.love/main/public/images/enigma.jpg)

제1차 세계 대전 당시에는 에니그마를 복호화할 수 있는 기술이 마땅치 않았습니다. 그러나 컴퓨터 발명이 급속도로 이루어짐과 동시에 에니그마 머신도 결국에는 복호화가 가능하게 됩니다. 그에 맞춰 에니그마 머신뿐만 아니라 다른 암호화 기술도 급속도로 발전하였고, 후에는 [RC4](https://en.wikipedia.org/wiki/RC4), [DES](https://en.wikipedia.org/wiki/Data_Encryption_Standard), [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) 등 여러 암호화 기술이 나오게 되었습니다. 현재는 AES-64bit도 복호화가 가능해졌답니다. 그러나 뛰어난 암호학자들의 노력 덕분에 아직까지는 AES-128bit, AES-256bit 암호 기술은 안전하다고 볼 수 있을 것 같습니다. 이 [AES 계산기는 대부분의 CPU에 내장](https://en.wikipedia.org/wiki/AES_instruction_set)되어 있기도 합니다.

### 1.2 비대칭 암호화 (Asymmetric Encryption)

대부분의 암호는 시간을 들여 오랫동안 복호화를 시도하면 언젠가는 암호가 풀린다는 치명적인 문제가 있습니다. 또한 무조건 도청을 안 당하는 것도 사실상 불가능한 일이고요. 따라서 암호를 만들 때는 **평문 내용의 수명 < 암호의 수명**이라는 조건을 기억하고 사용해야겠습니다. 암호 알고리즘은 '키를 가진 사람**만**이 복호화할 수 있어야 한다.' 즉, '키 이외의 정보를 다 알아도 복호화할 수 없다.'는 [케르크호프스의 원칙](https://en.wikipedia.org/wiki/Kerckhoffs%27s_principle)을 지켜야 합니다. 키 이외에 신경 써야 할 것이 있다면 잘못 만들어진 암호라는 셈이지요. 그러나 앞서 말했듯 도·감청으로 제 3자에게 키가 얼마든지 유출될 수 있다고 보았기 때문에 1976년까지는 키를 안전하게 교환하기 위해서 비공개 채널을 만들어 쓰려고 노력했습니다. 이를테면 비밀 주파수, 비밀 케이블, 스파이, 요원을 통해 키를 주고받은(key exchange) 것이지요. 반면 비대칭 암호화는 암호화 키 공유 프로세스가 보안될 필요가 없다는 장점을 지닙니다.

비밀키(private key)라는 개념이 나오기 전까지는 공개키(public key)라는 개념은 따로 존재하지 않았습니다. 그동안에는 키가 유출될 수 있다는 위험 부담은 있지만 어쨌든 키를 이용하면 암호화와 인증이 가능했기 때문에 '공개키' 방식만을 사용했습니다. 공개키는 누구에게나 알려도 괜찮답니다. 실제로 저에게 비밀 메시지를 보내시고 싶은 분이 계시다면 제 [공개키](https://gist.github.com/love-adela/18763342dd2519705deb953f3c0f2799)가 여기 있으니 암호화된 메시지를 보내주세요. 이 공개키는 암호화·복호화와 디지털 서명 확인을 할 때 쓰이기 때문에 공개해도 괜찮습니다. 공개키 기반 보안은 네트워크 뿐만 아니라, 프로그램 binary 변조를 확인(code signing)하거나, 이메일 메시지를 암호화는 방식으로 쓰이기도 합니다. 하지만 개인키는 반드시 본인만 알고 있어야 합니다. 복호화와 서명 생성 수단으로 쓰이기 때문에 절대로 타인에게 공개해서는 안됩니다.

      참고: binary가 변조되었는지 SHA(Secure Hash Algorithms)로 확인하기
      `shasum -a 256 filename1` eb4418ae314b4c68da2421405163ac9e86ae46e66b98ad6e6b67e55ec36bf0ef
      `shasum -a 256 filename2` eb4418ae314b4c68da2421405163ac9e86ae46e66b98ad6e6b67e55ec36bf0ef

1974년 랄프 머클(Ralph Merkle)이라는 학생이 UC Berkeley의 컴퓨터 보안 수업에서 "공개 채널만으로는 안전한 통신은 불가능하다."는 전통 이론을 배웠습니다. 당시에는 공개 채널 외 다른 채널을 병행해서 사용해야만 안전하게 통신할 수 있다는 미신이 널리 퍼져 있었어요. 머클은 이 가설을 증명하는 과제를 받았지만 과제를 수행할 수 없다고 판단했습니다. 대신 "공개 채널로도 안전한 통신이 가능하다"는 중요한 반례를 찾게 됩니다. 안타깝게도 교수는 이를 이해하지 못했어요. 머클은 암호학의 대가 휫필드 디피(Bailey Whitfield Whit Diffie)와 마틴 헬먼(Martin Hellman)을 찾아가 연구 결과를 알립니다. 그 덕분에 1976년에 [디피-헬만 키 교환(Diffie-Hellman Key Exchange)](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)이라는 비밀키 교환 기법이 제안되었습니다. 머클의 핵심적인 아이디어가 디피-헬만 키 교환에 기반이 되었으므로 [머클-디피-헬먼으로 불려야 한다](https://xtendo.org/ko/mdh)는 의견도 있습니다.

#### 1.2.1 디피-헬만 키 교환 방식

디피-헬만 키 교환 방식의 핵심은 **두 사람이 암호화되지 않은 통신망을 통해서 공통의 비밀 키(private key)를 교환할 수 있다**는 것입니다. 이 알고리즘은 큰 거듭제곱의 나머지 연산을 사용하는 것이 핵심이고 이산 로그를 구하는 과정이 어렵다는 특징이 있습니다.

Alice와 Bob이 디피-헬만 키 교환 방식으로 키를 교환하는 과정을 살펴봅시다. 레퍼런스는 [디피-헬만 키 교환 방식 위키피디아 문서](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)을 참고하였음을 미리 밝힙니다.

핵심 컨셉은 각자의 secrets만 숨긴다면 다른 것을 다 공개해도 전달하려는 메시지가 통신을 주고받는 당사자 둘에게만 알려진다는 것인데, 잘 이해가 안 되시죠. 천천히 알아볼까요?

1. Alice와 Bob은 스파이입니다. 서로 같은 편인지 코드로 확인하기 위해 'Brown Green'이라는 색상을 비밀리에 주고받고 싶습니다.
2. 하지만 Alice와 Bob이 통신 매체(예를 들어 카톡)로 주고받는 모든 이야기는 온 세상에 다 공개되고 있습니다. (단 혼잣말이나 혼자 갖고 있는 정보는 알려지지 않습니다.)
3. Alice와 Bob은 특단의 조치를 취해야 합니다. 따라서 각자만의 secret 색깔을 정합니다. Alice는 'Red'를, Bob은 'Blue Green'를 골랐어요.
4. Alice와 Bob은 서로에게 카톡을 보내기 전에 'Yellow'에다가 각자만의 secret 색깔을 더합니다.
  4.1 Alice는 'Orange-tan', Bob은 'Light Blue'를 만들어냈겠네요.
5. Alice와 Bob은 각자가 만든 색을 카톡으로 상대에게 보냅니다. 사람들은 secret 색깔은 모르지만 Bob에게는 'Orage-tan'이, Alice에게는 'Light Blue'가 주어졌다는 건 알게 됩니다.
6. Alice와 Bob은 카톡으로 받은 색깔에 다시 한번 자신의 secret 색깔을 더합니다. Alice는 'Red'를 'Light Blue'에, Bob은 'Blue Green'을 'Orange-tan'에 섞습니다.
7. Alice와 Bob은 둘 다 'Brown Green'이라는 색상을 얻습니다. 그 둘은 비로소 같은 편인지 확인할 수 있게 되었습니다.

![DHKX](https://raw.githubusercontent.com/love-adela/adela.love/main/public/images/dhkx.svg.png)

사람들은 **secret** 색깔이었던 'Red', 'Blue Green'을 제외하고 Alice와 Bob이 서로 카톡으로 주고받은 모든 색상을 알 수 있습니다. 하지만 secret 색상을 모르기 때문에 두 사람이 어떤 색상을 서로 주고받으며 코드를 확인했는지 알 길이 없습니다. 색깔을 조합해 더하는 것은 쉽지만 최종적인 색깔이 무엇인지는 알아내기 어렵기 때문입니다. 이러한 방식을 확장해 색깔이 아니라 큰 수를 키로 삼아 교환하면, 현대 슈퍼컴퓨터로는 제한시간 내에 계산하는 것이 불가능하다고 합니다. Alice와 Bob이 서로 주고받으려는 비밀 정보('Brown Green')가 맞는지 **확인**하는 과정은 매우 빠르지만, 그 비밀 정보가 무엇인지 거꾸로 **알아내는** 것은 어렵다는 점에 주목해 보아요.

#### 1.2.2 비대칭 암호화 알고리즘 (Asymmetric Encryption Algorithm) 기술

Public Key와 Private key 두 가지를 가리키는 키쌍(Key pair)은 비대칭 암호화 알고리즘에서 다음과 같은 성질을 나타냅니다.

* Public key
  * 암호화: 가능
  * 복호화: 불가능

* Private key
  * 암호화: 가능
  * 복호화: 가능

때문에 비대칭 암호를 기반으로 한 다음과 같은 암호 알고리즘이 개발되기 시작합니다.

1. [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)): 전통적으로 많이 사용하는 알고리즘이지요. 1977년부터 사용되기 시작했습니다. 그러나 느리다는 특징이 있습니다.
2. [Elliptic Curve](https://en.wikipedia.org/wiki/Elliptic_curve): 빨라졌습니다. 그러나 RSA와 마찬가지로 양자컴퓨터(Quantum Computer)가 발전하면 사용이 어렵습니다.
3. [Post-Quantum Cryptography](https://en.wikipedia.org/wiki/Post-quantum_cryptography) 개발: 사실 현재 양자 컴퓨터의 성능은 초창기라고 볼 수 있지만, 나중을 대비해 암호학자들의 후 양자암호까지 연구해둔 상태이니 안심하세요!

이 비대칭키 알고리즘을 덕분해 우리는 안전하게 키를 배포할 수 있게 되었고, [디지털 서명](https://en.wikipedia.org/wiki/Digital_signature)이 가능해졌습니다. 이로 인해 암호학뿐만 아니라 인터넷 보안에도 획기적인 발전이 일어났고요.
