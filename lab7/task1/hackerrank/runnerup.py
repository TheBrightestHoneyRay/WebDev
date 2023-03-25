n = int(input())
a = map(int, input().split())

scores = list(a)
maxsc = max(scores)
scores.sort()
answer = maxsc

for i in range(len(scores)):
    if scores[i] == maxsc:
        answer = scores[i - 1]
        print(answer)
        break

