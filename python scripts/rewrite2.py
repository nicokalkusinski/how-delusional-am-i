import csv

def read_csv(file_name):
    with open(file_name, 'r') as file:
        reader = csv.reader(file)
        header = next(reader) # skip the header row
        data = []
        for row in reader:
            data.append([row[0], float(row[1])])
        return data

# usage example:
data = read_csv('income distribution2.csv')
print(data)
