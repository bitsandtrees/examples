<?php

/*
Operations:
get(A, I): the data stored in the element of the array A whose indices are the integer tuple I.
set(A,I,V): the array that results by setting the value of that element to V.

Axioms:
get(set(A,I, V), I) = V
get(set(A,I, V), J) = get(A, J) if I ≠ J
for any array state A, any value V, and any tuples I, J for which the operations are defined.
*/

interface AbstractArray
{
    // get(A, I): the data stored in the element of the array A whose indices are the integer tuple I.
    public function get(array $i);

    // set(A,I,V): the array that results by setting the value of that element to V.
    public function set(array $i, $j) : AbstractArray;
}

class MyArray implements AbstractArray
{
    public function __construct(array $arr)
    {
        if (! empty($arr) && is_array($arr[0])) {
            $this->arr = array_reduce($arr, function($acc, $i) {
                return array_merge($acc, array_values($i));
            }, []);

            $this->rows = 2;
        } else {
            $this->arr = array_values($arr);

            $this->rows = 1;
        }
    }

    public function get(array $i)
    {
        return $this->arr[$this->tupleToIndex($i)];
    }

    public function set(array $i, $j) : AbstractArray
    {
        $this->arr[$this->tupleToIndex($i)] = $j;

        return $this;
    }

    private function tupleToIndex(array $tuple)
    {
        if (count($tuple) === 2) {
            return 2 * $tuple[0] + $tuple[1];
        }

        // [[0,1], [2,3]]
        // 2 * 0 + 0 => element[0] => element[0][0]
        // 2 * 1 + 0 => element[2] => element[1][0]

        return $tuple[0];
    }
}


