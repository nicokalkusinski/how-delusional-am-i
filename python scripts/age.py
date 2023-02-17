"""
<20 years	2.6 billion	33.2%
20-39 years	2.3 billion	29.9%
40-59 years	1.8 billion	23.1%
60-79 years	918 million	11.8%
80-99 years	147 million	1.9%
100+ years	0.6 million	0.01%
"""
import numpy as np

data = [["Age", "Population", "Individual percent"]]
total = 8014384909

for x in range(18, 116):
    population = 0
    percent = 0
    
    if x < 20:
        percent = (0.35 / 20)
        population = total * percent
    elif x >= 20 and x <= 39:
        percent = (0.32 / 20)
        population = total * percent
    elif x >= 40 and x <= 59:
        percent = (0.26 / 20)
        population = total * percent
    elif x >= 60 and x <= 79:
        percent = (0.11 / 20)
        population = total * percent
    elif x >= 80 and x <= 99:
        percent = (0.02 / 20)
        population = total * percent
    else:
        percent = (0.001 / 20)
        population = total * percent
    data.append([x, round(population), round(percent, 10)])

print(data)
total_percent = 0
total_population = 0
for i in range(1, len(data)):
    if i > 0:
        # print(data[i][-1])
        total_population += data[i][-2]
        total_percent += data[i][-1]
print(total_percent, total_population)

np.savetxt("age distribution.csv", data, delimiter =", ", fmt ='% s')