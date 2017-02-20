<?php
require('./AbstractArray.php');

use PHPUnit\Framework\TestCase;

class AbstractArrayTest extends TestCase
{
    public function testSingleDimensionalArraysCanFetchElements()
    {
        $subject = new MyArray([0,1,2,3,4]);

        $this->assertEquals(0, $subject->get([0]));
    }

    public function testSingleDimensionalArraysCanStoreElements()
    {
        $subject = new MyArray([]);

        $this->assertEquals(42, $subject->set([0], 42)->get([0]));
    }

    public function testSettingOneElementDoesNotImpactAnother()
    {
        $subject = new MyArray([0,1]);

        $this->assertEquals(1, $subject->set([0], 42)->get([1]));
    }

    public function testBiDimensionalArraysCanFetchElements()
    {
        $subject = new MyArray([[0,1],[2,3],[4,5]]);

        $this->assertEquals(2, $subject->get([1,0]));
    }

    public function testBiDimensionalArraysCanStoreElements()
    {
        $subject = new MyArray([[0,1],[2,3],[4,5]]);

        $this->assertEquals(42, $subject->set([1, 0], 42)->get([1, 0]));
    }
}
