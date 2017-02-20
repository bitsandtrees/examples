#include <iostream>
// Compile with `g++ mem-example.cpp -o mem-example`

using namespace std;

int main() {
  const int ARRAY_SIZE = 6;
  int numbers[ARRAY_SIZE] = { 4, 8, 15, 16, 23, 42 };
  std::cout << "Size of Int " << sizeof(int) << " bytes" << endl;
  std::cout << "Base Address: " << numbers << endl;

  for (int i = 0; i < ARRAY_SIZE; ++i) {
    cout << "Index " << i << " address: " << &numbers[i] << endl;
  }
}

