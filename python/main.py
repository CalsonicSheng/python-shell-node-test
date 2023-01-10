import json
from main2 import sub_func


def func():
    result1 = sub_func()
    dict1 = {"first_key": int(result1)+100000}
    # to passing data (should mostly be ) from python to js, always to serialize the value in json first
    json1 = json.dumps(dict1)
    return json1


# you must have print() to run python function triggered from index.js file
print(func())
