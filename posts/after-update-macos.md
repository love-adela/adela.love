---
title: 'Mac OS 업데이트 이슈 Wiki'
subtitle: 'Big Sur Version 11.1'
date: '2021-01-20'
---

Mac OS 업데이트 이후에 발생하는 이슈가 반복적으로 나타나, 트러블슈팅하는 방법을 위키로 정리해둔다. 마지막 OS 업데이트는 Big Sur Version 11.1이고 본 문서의 최종 수정일은 2021-01-20.

## CommandLineTools 관련 이슈

`brew doctor`, `git`을 실행하거나 컴파일 등 개발 툴을 실행했을 때, CommandLineTools의 버전이 너무 낮다고 경고하는 경우가 있다. 그럴 때엔 CommandLineTools를 재설치해서 버전을 올려줘야 한다.

1. `/usr/bin/python3`로 파이썬을 실행해서 정상적으로 실행된 경우: 최소 한 개 버전 이상의 CommandLineTools가 있는 상태. 구버전 cli(CommandLineTools)를 지우고 최신 버전으로 업데이트해줘야 한다.

    ```bash
    # 기존에 설치되어있던 구버전 CommandLineTools 지우는 커맨드
    sudo rm -rf /Library/Developer/CommandLineTools
    ```

    ```bash
    # 최신 버전의 CommandLineTools 설치하는 커맨드, XCode 설치하는 게 아니다.
    sudo xcode-select --install
    ```

2. `/usr/bin/python3`로 파이썬을 실행했을 때 "active developer path does not exist" 에러가 발생한 경우: CommandLineTools가 한 버전도 깔려있지 않은 상태

    ```bash
    # 최신 버전의 CommandLineTools 설치하는 커맨드, XCode 설치하는 게 아니다.
    sudo xcode-select --install
    ```

3. "xcrun: error: invalid active developer path (/Library/Developer/CommandLineTools), missing xcrun at: /Library/Developer/CommandLineTools/usr/bin/xcrun" 에러가 발생한 경우: CommandLineTools가 한 버전도 깔려있지 않은 상태

    ```bash
    # 최신 버전의 CommandLineTools 설치하는 커맨드, XCode 설치하는 게 아니다.
    sudo xcode-select --install
    ```

* 참고: xcrun은 commandline에서 Xcode 내의 도구를 찾거나 실행할 수 있는 [shim](https://en.wikipedia.org/wiki/Shim_(computing)) 중 하나.