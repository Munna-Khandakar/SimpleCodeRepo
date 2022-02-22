// Online C++ compiler to run C++ program online
#include <iostream>

using namespace std;

//converting the lower case to upper case
void upper_case(string s) {
    for (int i = 0; i < s.length(); i++) {
        s[i] = 'A' + (s[i] - 'a');
    }
    cout << s << endl;
}

int main() {

    string s = "coding in programiz";
    string word = "";
    for (auto x: s) {
        if (x == ' ') {
            upper_case(word);
            word = "";
        } else {
            word = word + x;
        }
    }
    upper_case(word);

    return 0;
}
