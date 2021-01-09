---
title    : '소수(Prime Number) 판별법'
subtitle : '소수는 약수가 1과 자기 자신 밖에 없는 수를 뜻한다.'
date     : '2020-01-11'
---

## 1. [소수 (Prime Number)](https://en.wikipedia.org/wiki/Prime_number)

약수가 1과 자기 자신밖에 없는 수를 통칭합니다.

## 2. 소수판별법 (1)

N이 소수가 되려면 N은 [2, N) 범위의 자연수로 나누어 떨어지면 안 됩니다.
예를 들어 1부터 100까지의 소수는 아래와 같습니다.

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89 97

### 2.1 구현

N이 1 이상의 다른 수로 나눠지지 않는 소수인지를 판별해 bool 값을 리턴하는 함수를 구현해보겠습니다.

* 시간 복잡도: O(N)

```python
# 2부터 N-1까지의 자연수를 모두 순회하는 방법
def is_prime(n:int)->bool:
    if n < 2:
        return False
    for i in range(2, n-1):
        if n % i == 0:
            return False
    return True
```

그러나 이 방법은 2부터 N-1까지의 모든 자연수를 순회해야만 합니다. 때문에 이보다 시간을 조금 더 줄일 수 있는 방법이 필요합니다.

## 3. 소수판별법 (2)

어차피 1 이상의 다른 수, 즉 2로 나눠지지 않는 수 중에서 다른 수(3 이상의 다른 수)로 나눠지는지를 알아보면 되니까 검사할 수 범위를 **[2, N/2]** 로 줄여보면 어떨까요?

즉, N 자신을 제외한 N의 약수 중에서 가장 큰 약수는 N/2보다 작거나 같기 때문에 범위를 줄일 수 있게 됩니다. 예를 들어, 12의 약수 **(1, 2, 3, 4, 6, 12)** 중 12 자신을 제외한 가장 큰 약수는 6으로 12/2와 같습니다. 이를 일반화하면, `N = a * b (a <= b)` 일 때, 가능한 a 중에서 가장 작은 수는 2이기 때문에 b는 2/N을 넘지 않는다는 사실을 알 수 있습니다.

### 3.1 구현

* 시간 복잡도: O(N/2)

```python
# 2부터 N/2까지의 자연수만 순회하는 방법
def is_prime(n:int)->bool:
    if n < 2:
        return False
    for i in range(2, n//2+1):
        if n % i == 0:
            return False
    return True
```

그러나 이 시간 복잡도 상의 1/2은 상수이기 때문에 사실상 O(N)과 다름없습니다. O(N)보다 더 빠른 소수 판별법은 없을까요?

## 4. 소수판별법 (3)

N에 대한 소수 판별을 위해 쓰이는 약수를 찾기 위해 **[2, sqrt(N)]** 의 범위만 순회하는 방법을 떠올려볼 수도 있습니다.
N이 소수가 아니라면, `N = a * b (a<=b)`로 나타낼 수 있기 때문입니다.
실제로 두 수 a와 b의 차이가 가장 작은 경우는 sqrt(N)이겠네요.
예를 들어 24의 약수는 **1, 2, 3, 4, 6, 8, 12, 24** 인데요, 두 수의 곱으로 24가 될 수 있는 a, b 중 그 두 수의 차가 가장 작은 쌍은 4와 6이 됩니다.
즉, `sqrt(24) = 4.898979485566356..` 라는 점을 기준으로 6 이상의 자연수는 순회하지 않아도 소수를 판별할 수 있는 셈이지요.

* 시간복잡도: O(N**(1/2))

그러나 이 방법도 N의 크기에 따라 긴 시간이 소요될 수 있습니다. 각각의 수에 대해서 소수인지 아닌지 검사해야 하기 때문에, N이 1,000,000일 때, 수행 시간은 1,000,000 * 1,000 = 1,000,000,000, 즉 10초씩이나 걸린다는 단점이 있습니다.

## 5. 소수판별법 (4)

수행 시간을 크게 아껴야 하는 경우가 아니라면, 1부터 N까지의 범위 안에 들어가는 모든 소수를 구해야 할 때도 있습니다.
그럴 때는 [에라토스테네스의 체](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Algorithm_complexity)를 사용하면 됩니다.
에라토스테네스의 체는 판별한 수 중 소수가 아닌 것을 지워가면서 중복적으로 소수 판별 검사를 하지 않게 하는 방법입니다.

### 5.1 에라토스테네스의 체 구현

* 시간복잡도: O(NloglogN)

```python
def eratosthenes(n:int):
    MAX = 100
    is_prime = [True] * (MAX+1)
    is_prime[0] = is_prime[1] = True

    for i in range(2, MAX+1):
        if is_prime[i]:
            j = 2*i
        while j <= MAX:
            is_prime[j] = False
            j += i

    primes = []
    for i in range(2, len(is_prime)):
        if is_prime[i]:
            primes.append(i)
    return primes
```