---
title: '정렬과 탐색 (Sort and Search)'
subtitle: 'O(n^2)부터 O(nlogn)까지의 소팅 알고리즘을 알아보자.'
date: '2019-06-30'
---

정렬 알고리즘(sorting algorithm)은 원소들을 일정한 순서대로 열거하는 알고리즘입니다. 정렬 방식에 따라 정렬에 필요한 시간이나 공간 같은 비용이 각기 다르게 소요되는데요. 정렬 알고리즘을 분류하는 기준은 여러가지가 있으나, 이번 글에서는 비교정렬과 비-비교정렬 크게 두 가지로 나누어 소개해보도록 하겠습니다.

## 1. Sorting Algorithm (비교정렬)

### 1.1 Comparison Sort

비교정렬에는 시간복잡도 O(n^2)과 O(nlogn)에 따라 다음과 같은 정렬 방법이 존재합니다.

* O(n^2) 소트: bubble sort, selection sort, insertion sort
* O(nlogn) 소트: quick sort, merge sort, heap sort
* O(n^2) 소트와 O(nlogn) 소트를 섞은것: intro sort, tim sort

#### 1.1.1 Bubble Sort

* 특징 : 버블 정렬은 배열의 첫 원소부터 순차적으로 진행하며, 현재 원소가 그 다음 원소의 값보다 크면 두 원소를 바꾸는 작업을 반복한다. 이런 식으로 배열을 계속 살펴보면서 완전히 정렬된 상태가 될 때까지 반복한다.
* 평균 및 최악 실행시간 : O(n^2)
* 메모리 : O(1)
* 가장 느리다. / 잘 안 씀. / 큰 수를 가장 오른쪽으로 옮기는 컨셉.

```python
numbers = [int(param) for param in input().split()]

for i in range(len(numbers)):
  for j in range(len(numbers) - (1+i)):
    if numbers[j] > numbers[j+1]:
      numbers[j], numbers[j+1] = numbers[j+1], numbers[j]
print(' '.join(str(num) for num in numbers))
```

#### 1.1.2 Selection Sort

* 특징 : 배열을 선형 탐색(linear scan)하며 가장 작은 원소를 배열 맨 앞으로 보낸다(맨 앞에 있던 원소와 자리를 바꾼다.) 그 다음에는 두 번째로 작은 원소를 찾은 뒤 앞으로 보내 준다. 이 작업을 모든 원소가 정렬될 때까지 반복된다.
* 평균 및 최악 실행시간 : O(n^2)
* 메모리 : O(1)

```python

numbers = [int(param) for param in input().split()]

# selection sort - (1)
for i in range(len(numbers)):
  for j in range(i, len(numbers)):
    if numbers[i] > numbers[j]:
      numbers[i], numbers[j] = numbers[j], numbers[i]
print(' '.join(str(num) for num in numbers))

# selection sort - (2)
for i in range(len(numbers)):
  min_index = i
  for j in range(i + 1, len(numbers)):
    value = numbers[j]
    if value > numbers[min_index]:
      min_index = j
  numbers[i], numbers[min_index] = numbers[min_index], numbers[i]
```

#### 1.1.3 Insertion Sort

* 특징: 정렬되지 않은 배열을 정렬된 배열에 삽입한다.
* 평균 및 최악 실행시간 : O(n^2)
* 메모리 : O(1)

```python
numbers = [int(param) for param in input().split(' ')]

# insertion sort - 두 배열을 활용하는 방법 # 첫 번째
list = []
for i in range(len(numbers)):
  is_inserted = False
  for j in range(len(list)):
    if numbers[i] < list[j]:
      is_inserted = True
      list.insert(j, numbers[i])
      break
  if not is_inserted:
    list.append(numbers[i])
print(' '.join(str(num) for num in list))

# insertion sort - 두 배열을 활용하는 방법 # 두 번째
sorted = []
for number in numbers:
  not_inserted = True
  for i in range(len(sorted)):
    if number < sorted[i]:
      not_inserted = False
      sorted.insert(i, number)
      break
  if not_inserted:
      sorted.append(number)

# Insertion Sort - 두 배열을 활용하는 방법  # 세 번째
def insertion_sort(numbers: list) -> list:
  sorted_list = []
  for number in numbers:
    i = 0
    while i < len(sorted_list) and number >= sorted_list[i]:
      i += 1
    sorted_list.insert(i, number)
  return sorted_list

print(sorted)

# insertion sort - 배열 하나로 정렬하는 방법

def delete(list, index):
  new_list = list.copy()

  for i in range(index, len(list) - 1):
    print(new_list)
    new_list[i] = new_list[i+1]
  new_list.pop()
  return new_list

def insert(list, index, new_element):
  new_list = list.copy()
  new_list.append(None)
  for i in range(index +1, len(list) - 1):
    print(new_list)
    new_list[i] = new_list[i+1]
    # new_list[index] = new_element
    # new_list += new_list[index]
  return new_list


result = insert(['a', 'b', 'c', 'd', 'e'], 1, 'f')
print(result)
```

#### 1.1.4 **Merge Sort**

* 특징 : Quick Sort를 사용할 수 없을 경우 유용하다.
* 평균 및 최악 실행시간 : O(nlogn)
  * 분할 => logn
  * 머지 => n

```python
def merge(list1, list2):
  merged_list = []
  i = 0
  j = 0

  while i < len(list1) and j < len(list2):
    if list1[i] < list2[j]:
      merged_list.append(list1[i])
      i += 1
    else:
      merged_list.append(list2[j])
      j += 1

  # 남은 원소가 있는지 확인할 수도 있고
  # if i < len(list1):
  #     while i < len(list1):
  #         merged_list.append(list1[i])
  #         i += 1

  # 확인하지 않을 수도 있다.
  # if j < len(list2):
  #     while j < len(list2):
  #         merged_list.append(list2[j])
  #         j += 1  
  merged_list += list1[i:]
  merged_list += list2[j:]
  return merged_list

# Test
# assert merge([1, 3, 5], [2, 4, 6]) == [1, 2, 3, 4, 5, 6]

def merge_sort(my_list):
  if len(my_list) < 2:
    return my_list

  left = my_list[:len(my_list) // 2]
  right = my_list[len(my_list) // 2:]
  return merge(merge_sort(left), merge_sort(right))
some_list = [11, 3, 6, 4, 12, 1, 2]
print(merge_sort(some_list))
```

#### 1.1.6 **Quick Sort**

* 평균 : O(nlogn)
* 최악 : O(n^2)
* 메모리 : O(logn)

```python
# quick sort 첫번째 방법
def quick_sort(a):
  n = len(a)

  if n <= 1:
    return a

  pivot = a[-1]
  g1 = []
  g2 = []
  for i in range(0, n-1):
    if a[i] < pivot:
      g1.append(a[i])
    else:
      g2.append(a[i])
  return quick_sort(g1) + [pivot] + quick_sort(g2)

d = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]
print(quick_sort(d))
```

```python
# quick sort 두번째 방법: in-place
def quick_sort_in_list(unsorted_list, start, end):
  if end - start <= 0:
    return
  pivot = unsorted_list[end]
  i = start
  for j in range(start, end):
    if unsorted_list[j] <= pivot:
      unsorted_list[i], unsorted_list[j] = unsorted_list[j], unsorted_list[i]
      i += 1
  unsorted_list[i], unsorted_list[end] = unsorted_list[end], unsorted_list[i]

  quick_sort_in_list(unsorted_list, start, i - 1)
  quick_sort_in_list(unsorted_list, i + 1, end)

def quick_sort(a):
  quick_sort_in_list(a, 0, len(a) - 1)

d = [6, 8, 3, 9, 10, 1, 2, 4, 7, 5]
quick_sort(d)
print(d)
```

### 1.2 Non-Comparison Sort (비-비교정렬)

하나 하나 비교하는 것이 아니라, 고차원적인 성질을 비교하는 방법. 주로 정렬해야 하는 대상의 특징이 다를 때 사용한다. 예를 들어, type이 다를 때.

* 구하는 방법에 관한 예시 : nC2
* 시간 복잡도 :  kn (단, 여기서 k는 자리수)
* radix sort, counting sort

#### 1.2.1 Radix Sort

* 낮은 자리수부터 비교하여 정렬하는 알고리즘
* 시간복잡도 : O(kn)
* 데이터 전체 크기에 대한 기수 전체의 테이블이 비례하기 때문에.
* stable
* Non-Comparison Sort
* 자리수가 없을 때 못 쓴다. ex. 벡터값 (1, 3), (2, 4), (3, 6)

```python
# lsd
def radix_lsd(input_list):
  position = 1

  while True:
    empty_lists = [list() for _ in range(10)]
    is_sorted = True

    for number in input_list:
      radix = number // position % 10
      empty_lists[radix].append(number)

      if number // position > 10:
        is_sorted = False

    position *= 10
    input_list.clear()

    for numbers in empty_lists:
      for num in numbers:
        input_list.append(num)

    if is_sorted:
      return input_list
```

```python
# msd
def find_digit(number, digit, base):
	return (number // base ** digit) % base

def counting_sort_with_digit(input_list, digit, base):
  B = [-1] * len(input_list)
  C = [0] * base # [0] * ((base -1) + 1)
  for item in input_list:
    C[find_digit(item, digit, base)] += 1

  for i in range(base - 1):
    C[i + 1] += C[i]

  for j in reversed(range(len(input_list))):
    B[C[find_digit(input_list[j], digit, base)] - 1] = input_list[j]
    C[find_digit(input_list[j], digit, base)] -= 1
  return B


from math import log

def radix_sort_msd(data, base=10):
  # 입력된 리스트 가운데 최대값의 자릿수 확인
  digit = int(log(max(data), base) + 1)
  # 자릿수 별로 counting sort
  for d in range(digit):
    data = counting_sort_with_digit(data, d, base)
  return data
```

#### 1.2.2 Counting Sort

* 특징
  * 요소 값을 명시적으로 비교하지 않아도 정렬할 수 있다.
  * input_list의 max_value에 따라서 for 문을 도는 횟수가 달라짐에 따라 비효율적일 수 있다.
  * max_value가 counting sort의 복잡성을 지배한다.
  * stable sort
* 시간복잡도 : O(n)

```python
def counting_sort(input_list, max_value):
  result_list = [-1] * len(input_list)
  counting_list = [0] * (max_value + 1)

  for elem in input_list:
    counting_list[elem] += 1

  for i in range(max_value):
    counting_list[i + 1] += counting_list[i]

  for j in reversed(range(len(input_list))):
    result_list[counting_list[input_list[j]] - 1] = input_list[j]
    counting_list[input_list[j]] -= 1

  return result_list

unordered_list = [95, 1, 656, 72, 35, 83, 760, 944, 876, 684, 767, 709]
print(counting_sort(unordered_list, max(unordered_list)))
```
