import numpy as np

def normal_distribution(x, mu, sigma):
    return round((1 / (np.sqrt(2 * np.pi * (sigma ** 2)))) * np.exp(-((x - mu) ** 2) / (2 * (sigma ** 2))), 10)

gender = ["Female", "Male"]
mean = [164.7, 178.4] #male = 178.4, female = 164.7
sd = [7.1, 7.6] #male = 7.6, female = 7.1

data = []
data.append(["Gender", "Height [cm]", "Individual percent"])
for g in range(2):
    for x in range(0, 500, 1):
        val = normal_distribution(x, mean[g], sd[g])
        last_val = data[-1][-1] #last value of the last element in data list
        if val > 0:
            data.append([gender[g], x, val])# if len(data) > 1 else data.append([gender[g], x, val, val])

print(data)

# save as csv file using the savetxt from the numpy module
np.savetxt("height distribution.csv", data, delimiter =", ", fmt ='% s')
