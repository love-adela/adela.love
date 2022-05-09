---
title: 'Trouble Shooting Wiki'
subtitle: '프로그래밍을 하다가 마주친 문제 해결 내용'
date: '2022-05-09'
---


## 1. python3 가상환경에 **psycopg2**가 설치되지 않는 이슈

### 1.1 "Failed building wheel for psycopg2" - MacOSX using virtualenv and pip

Ref: https://stackoverflow.com/questions/34304833/failed-building-wheel-for-psycopg2-macosx-using-virtualenv-and-pip

### 1.2 For MacOS users

1. `brew install openssl` 설치
2. openssl path를 LIBRARY_PATH를 다음으로 설정
`export LIBRARY_PATH=$LIBRARY_PATH:/usr/local/openssl/lib/`
3. `pip3 install pyscopg2` 설치

<br>
