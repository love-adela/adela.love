---
title: '그래프 자료구조 톺아보기'
subtitle: '그래프는 정점(Node, Vertex)과 간선(Edge)으로 이뤄져 있는 자료구조다.'
date: '2020-04-12'
---

본 게시물은 2020년 2월에 수강하였던 [백준님의 오프라인 코딩 교육](https://startlink.io/) 후 강의 내용을 정리하고 추가로 알게된 내용을 더하여 작성하였습니다.

## 1. 그래프(Graph)

그래프는 자료구조로 정점(Node, Vertex)과 간선(Edge)으로 이뤄져 있습니다. 그런데 그래프는 어떤 역할을 할까요? 이는 어떤 한 정점과 연결되어 있는 나머지 모든 정점을 구할 수 있게 합니다. 통상 그래프는 `G = (V, E)`로 표현합니다. 자세한 내용은 아래에서 다루기로 하고, 먼저 그래프의 용어에 대해서 알아보도록 하겠습니다.

1. 정점(Vertex 또는 Node) : 위치를 표현하는 개념입니다.
2. 간선(Edge)

      * 그래프에서 연결되어 있는 관계를 나타냅니다.
      * 간선은 여러개 일수도 있습니다. (multiple edge)

3. 가중치(Weight)

      * 간선에 값이 들어 있는 경우, 즉 비용을 의미합니다.
      * 현실세계에서 비용은 이동하는 거리, 필요한 시간, 비용 등을 뜻합니다.
      * 가중치가 없는 경우는 가중치가 1로 생략되었다고 전제합니다.

4. 차수(Degree)

      * 정점과 연결되어 있는 간선의 개수를 뜻합니다.
      * Directed graph인 경우에는 차수를 따지는게 조금 까다롭습니다.
        * In-degree : 어떤 정점에 들어오는 간선의 개수
        * Out-degree : 어떤 정점에서 나가는 간선의 개수

### 1.1 경로(Path)

한 정점인 시작점에서 다른 정점인 도착점으로 가는 간선이 연속되게 연결된 것을 뜻합니다.
경로의 개수는 중요하지 않고, 최단경로를 알아내는 것이 중요합니다.

      최단경로란?

      * 경로 중에서 가장 짧은 것을 나타냅니다.
      * 가중치가 있을 때 가중치의 합이 가장 작은 것을 의미합니다.

### 1.2 사이클(Cycle)

경로의 일종. 시작점과 도착점이 같은 것을 뜻합니다.
예를 들어 정점 A에서 정점 A로 다시 돌아오는 경로를 말합니다.
특별한 제한이 없다면 문제에서 경로와 사이클은 단순경로 / 단순사이클을 뜻합니다.

1. 단순 경로(Simple Path) : 경로에서 같은 정점을 두 번 이상 방문하지 않는 경로

2. 단순 사이클(Simple Cycle) : 사이클에서 같은 정점을 두 번 이상 방문하지 않는 사이클

### 1.3 방향이 있는 그래프(Directed Graph)

A → C 와 같이 간선에 방향이 있습니다.

### 1.4 방향이 없는 그래프(Undirected Graph)

양방향 그래프라고도 합니다. A-C는 양방향을 의미합니다. A ← C와 A → C의 경우로 나눌 수 있습니다.
다만 그래프를 저장할 때 반드시 간선을 양방향으로 따로따로 나누어 저장해야 합니다.

### 1.5 루프(loop)

간선의 양 끝 점이 같은 그래프입니다.

## 2. 그래프의 표현 (Representation of Graph)

그래프를 저장할 때 정점의 개수와 간선의 모든 정보를 저장합니다.

        정점 : {1, 2, 3, 4, 5, 6}
        간선 : {(1, 2), (1, 5), (2, 5), (2, 3), (3, 4), (2, 4), (4, 5), (4, 6)}

어떤 정점 X와 연결된 간선을 효율적으로 찾기 위해서 간선(=그래프)을 저장합니다.

### 2.1 인접 행렬 (Adjacency-matrix)

행렬로 2차원 배열에 그래프를 저장하는 방법입니다.

* 가중치가 없을 때

      A[i][j] = 1인 경우, i → j까지로의 간선이 있다고 간주합니다.
      A[i][j] = 0인 경우, i → j까지로의 간선이 없다고 간주합니다.

* 가중치가 있을 때

      A[i][j]에 그때의 가중치를 대입하고, 가중치가 없다면 0을 대입합니다.

#### 2.1.1 특징

1. 공간복잡도 : O(V^2)
    * 이차원배열을 사용합니다. 정점의 거듭제곱만큼 공간이 필요합니다.

2. 장점

    * 어떤 정점에 간선이 있는지 확인할 때
      임의의 두 정점 (u, v)가 주어졌을 때 u → v 가는 간선이 존재하는지만 확인합니다.
      * 시간 복잡도 : O(1)

    * 두 정점의 역방향에 이르는 간선이 존재하는지 확인할 때
      임의의 두 정점 (u, v)가 주어졌을 때 u → v 로 가는 (v, u)가 존재하는지 확인합니다.
      * 시간 복잡도 : O(1)

3. 단점

    * 공간에 대한 비용이 너무 많이 발생합니다.
      * 정점의 개수 V <= 1,000,000(백만)이라고 할 때 4조(=(100만)^2*4) byte의 공간이 필요합니다.
      * 예외 : 완전 그래프(그래프의 모든 정점 사이에 간선이 존재하는 그래프)
        * 완전그래프의 정점의 개수 `E = V(V-1) / 2`, 즉 V개 중에 2개를 고르는 경우의 수이기 때문에 인접리스트 사용시할 때보다 공간에 대한 비용이 적은 편입니다.
    * 시간에 대한 비용이 많이 발생합니다.
      * 임의의 정점 x와 연결된 모든 간선을 찾을 때 O(V), A[x][1] ~ A[x][v] 를 다 탐색해야 하기 때문입니다.

### 2.2 인접 리스트 (Adjacency-list)

A[i] = i(정점)와 연결된 정점, 즉 간선을 리스트(linked list)에 포함합니다. 간선의 순서는 상관 없습니다.

    * 가중치가 없는 경우
    A[1] 2 5
    A[2] 1 3 4 5
    A[3] 2 4
    A[4] 3 5 2 6 
    A[5] 1 2 4
    A[6] 4

    * 가중치가 있는 경우 - 가중치를 정점과 쌍으로 나타냅니다.
    A[1] (2, 2) (5, 7)
    A[2] (1, 2) (3, 2) (4, 3) (5, 1)
    A[3] (2, 2) (4, 1)
    A[4] (3, 1) (5, 7) (2, 3) (6, 7)
    A[5] (1, 7) (2, 1) (4, 7)
    A[6] (4, 7)

#### 2.2.1 구현

linked list를 사용합니다.

* linked list의 장점 : 크기를 동적으로 사용할 수 있게 됩니다.
* 대부분의 프로그래밍 언어에서 리스트는 길이를 가변적으로 사용할 수 있도록 구현되어 있기 때문에 linked list를 직접 구현하지 않아도 됩니다.
  * C++ : Vector, Java : ArrayList, Python: list
  * 단, C에서는 직접 구현해야 함을 유의하세요.

#### 2.2.2 특징

1. 공간복잡도: O(E)

    * 각각의 간선을 저장하고 linked list에 추가되기 때문에 각각의 간선의 개수만큼 저장합니다.
    * E << V ^ 2 기 때문에 인접리스트를 많이 사용합니다.

2. 장점

    * 보통 문제 조건 제한이 1 <= E <= 10만, 1 <= V <= 100만이기 때문에 공간 비용이 적은 편입니다.
    * 시간에 대한 비용이 적습니다.
      * 임의의 정점 x와 연결된 모든 간선을 찾을 때 O(차수)가 걸립니다.
        * 인접리스트로 구현한 dfs : O(V+E)
        * 인접행렬로 구현한 dfs : O(V^2)

3. 단점

    * 어떤 정점에 간선이 있는지 확인할 때
      * 임의의 두 정점 (u, v)가 주어졌을 때 u → v 가는 간선이 존재하는지 확인하려면 A[v]에서 모든 정점을 다 찾아봐야 합니다.
      * 시간 복잡도 : O(u의 차수)

    * 두 정점의 역방향에 이르는 간선이 존재하는지 확인할 때
      * 임의의 두 정트 (u, v)가 주어졌을 때 u → v 로 가는 (v, u)가 존재하는지 확인하려면 A[v]에서 모든 정점을 한 번씩 다 찾아봐야 합니다.
      * 시간 복잡도 : O(u의 차수)

    * C언어나 입출력 함수를 제외한 다른 기타 라이브러리를 사용할 수 없을 때는 linked list만 사용해야 할텐데 구현이 너무 귀찮고 번거로운 단점이 있습니다.

### 2.3 간선리스트(edge-list)

동적할당 없이 인접리스트와 비슷한 효과를 낼 수 있습니다. 명칭은 백준님이 직접 지어내셨다고 합니다.

#### 2.3.1 구현

1. E라는 일차원 배열에 모든 간선을 저장한다.
2. 저장된 배열 E를 정렬한다.

        E[0] = 1 2
        E[1] = 1 5
        E[2] = 2 1
        E[3] = 2 3
        E[4] = 2 4
        E[5] = 2 5
        E[6] = 3 2
        E[7] = 3 4
        E[8] = 4 2
        E[9] = 4 3
        E[10] = 4 5
        E[11] = 4 6
        E[12] = 5 1
        E[13] = 5 2
        E[14] = 5 4
        E[15] = 6 4

3. 정렬된 결과에서 앞 정점의 차수를 세어 cnt라는 배열에 저장한다.
4. cnt 배열을 앞에서부터 stacked된 데이터로 갱신한다.

```python
# python
for i in range(n):
    cnt[i] += cnt[i-1]
```

```c++
// c++
for (int i=1; i<=n; i++) {
    cnt[i] = cnt[i-1] + cnt[i]
}
```

임의의 한 정점에서 시작하는 모든 간선을 찾기 위해서 인접행렬을 사용했기 때문에, 간선리스트의 정보를 활용하면 훨씬 쉽게 구할 수 있습니다.

예를 들어, 3으로 시작하는 간선은 cnt[i]의 값이 E[6,8)에 저장된 간선의 데이터를 의미합니다.

      E[6] = 3 2
      E[7] = 3 4

5로 시작하는 간선은 cnt[i]의 값이 E[12, 15)에 저장된 간선의 데이터를 의미합니다.

      E[12] = 5 1
      E[13] = 5 2
      E[14] = 5 4
