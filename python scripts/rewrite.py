import json

with open('data.json') as f:
    data = json.load(f)

result = {}
for key in data:
    subkeys = list(data[key].keys())
    if all([sk in data[key] for sk in subkeys]):
        result[key] = [[item[0], item[1]] for item in zip(data[key][subkeys[0]], data[key][subkeys[1]])]

with open('new_data.json', 'w') as f:
    json.dump(result, f, indent=4, separators=(',', ':'))