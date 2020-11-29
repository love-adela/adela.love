---
title     : 'Hash Collision 해결 방법'
date      : '2020-01-03'
---

이번 글에서는 **해시테이블(Hash Table)** 에서 발생하는 **해시충돌(Hash Collision)**, 그리고 이를 해결하는 방법을 살펴보겠습니다. 이 글은 2019년에 6개월 동안 했던 알고리즘 스터디의 내용을 참고하였고, 추가적인 내용은 계속 추가하고 있음을 먼저 밝힙니다.

## 해시테이블(Hash Table)

해시 테이블은 연관 배열 [Associative Array](https://en.wikipedia.org/wiki/Associative_array) ADT(Abstract Data Type, 추상 데이터 유형)를 구현하는 자료구조로 키(key)를 값(value)에 매핑합니다. 해시테이블은  해시맵(Hash Map)이라고도 합니다.

큰 배열에 해시함수의 리턴 값을 저장해 만들어진 해시테이블은 데이터를 삽입, 읽기, 삭제할 때 유용하게 쓰입니다. 이에 대한 시간 복잡도는 Amortized Time Complexity O(1)이지만, 시간 복잡도 상 최악의 케이스가 발생한다는 특징이 있습니다. 이에 대한 원인은 하단의 **해시충돌**에서 다루도록 하겠습니다.

## 해시함수(Hash Function)

해시함수는 임의의 데이터를 고정된 길이의 데이터로 매핑하는 함수입니다. 예를 들어 `h:T → Integer [0, N)` 에서 h 함수는 문자열, 정수, 구조체 같은 임의의 타입 T를 받아 [0, N) 범위의 정수를 반환합니다. 해시테이블의 품질은 해시함수가 결정하는데 좋은 해시함수를 구현하는 것은 꽤 어렵습니다.

### 해시함수가 지키면 좋은 성질

* 각각의 다른 입력에 대해 출력되는 데이터가 같은 경우를 적게 만들어야 합니다. 이를 **해시충돌**이라고 합니다.
* 출력 값의 분포가 균일해야 합니다. (Uniform Distribution)

### 해시함수의 예시

- 입력 받은 키를 임의의 정수를 곱하고 나눈 나머지를 리턴하는 함수

```python
# First Example
def get_index(key:int)->int:
    return (key * 17) % 101
```

- 문자열 key의 아스키 코드를 돌려주는 함수 ([Pearson Hashing](https://en.wikipedia.org/wiki/Pearson_hashing))

```python
# Second Example
import random

USE_RANDOM_SEED = False

hash_table = [None for _ in range(20)]
look_up_table = [x for x in range(256)]

if USE_RANDOM_SEED:
    random.Random(0).shuffle(lookup_table)
else:
    random.shuffle(lookup_table)

def pearson_hash(key:str) -> int:
    hash = 0
    for ch in key:
        hash = random_table[hash ^ (ord(ch) % 256)]
    return hash % len(hash_table)
```

## 해시충돌(Hash Collision)

무한한 가짓수의 입력값으로 유한한 가짓수의 출력값을 생성한다면 [비둘기집의 원리(pigeon hole)](https://en.wikipedia.org/wiki/Pigeonhole_principle)에 의해 해시충돌은 항상 존재합니다.

### 해시충돌 해결 전략 1

1. [Separate Chaining](https://en.wikipedia.org/wiki/Hash_table#Separate_chaining_with_linked_lists)

2. [Open Addressing](https://en.wikipedia.org/wiki/Open_addressing)

빠르지만 구현이 복잡합니다. 여기서 빠르다는 의미는 Cache Friendly하고 SIMD(Single Instruction Multiple Data) Friendly하다는 뜻입니다. 평상시 저희가 쓰는 대부분의 해시테이블은 Open Addressing으로 구현되어 있습니다.

구현 방법
- Backshifting
- Tombstone

```python
# Open Addressing - tombstone 사용하기

# Hash Table
lst = [(0, False, False) for _ in range(101)]
# tuple로 (int value, bool is_contained, bool is_tombstone)을 나타냄

# Hash Function
def get_index(key:int)->int:
    return (key*17)%101

# Insert 연산
def insert_item(n:int)->bool:
    index = get_index(n)
    while True:
        if not lst[index][1]: # index에 값이 없으면
            lst[index] = (n, True, False) # value, is_contained 갱신
            return True
        elif lst[index][0] == n and not lst[index][2]:
            return False
        else:
            index += 1
            if index == len(lst):
                index = 0
```

### 해시충돌 해결 전략 2 : 리해싱(Rehashing)

해시테이블의 50%가 차면 테이블 리사이징을 해서 해시테이블의 크기를 두배로 늘릴 수 있습니다.
리해싱의 방법에는 크게 두 가지가 있습니다.

1. All-at-once Rehashing

- 해시알고리즘 특성상 테이블 크기가 변하면 기존 테이블 안에있던 원소들을 모조리 움직여줘야 합니다. 해시가 너무 클 경우에는 사용하지 못할 때도 있습니다.

2. Incremental Rehashing

- 일시적으로 기존 테이블과 크기가 두배로 커진 테이블 두개를 동시에 운용하고 일시적으로는 삽입/접근 연산을 할때에 테이블 두개를 모두 접근합니다.
- 테이블 두개를 모두 접근할때마다 기존 테이블에 있던 원소를 새 테이블로 옮겨갑니다. All-at-once rehashing에 비해 한번에 리해싱하느라 특정시점에 쏠린 부하를 여러 시간에 조금씩 퍼뜨린다는 특징이 있습니다.
