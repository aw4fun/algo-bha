from collections import deque

graph = {
    'you': ['vasya', 'petya', 'jora', 'salem'],
    'vasya': ['semen', 'nata'],
    'petya': ['eremei'],
    'jora': ['kventin'],
    'salem': ['jopa', 'ryka']
}

search_deque = deque()
search_deque += graph['you']


def is_mango_seller(data):
    return data[-1] == 'i'


def check_graph_to_mango_seller(data):
    while data:
        person = data.popleft()
        if is_mango_seller(person):
            return person + ' is a mango seller!'
        else:
            if graph.get(person):
                data += graph[person]
    return 'no one mango seller >.<'


print(check_graph_to_mango_seller(search_deque))
