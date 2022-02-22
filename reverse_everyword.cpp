
#include <iostream>
using namespace std;

//function to reverse the word
void reverse_word(string str){
    string rev;
    for(int i=str.length()-1;i>=0;i--){
        rev.push_back(str[i]);
    }
    
    cout << rev<<" ";
}

//function to split the words from the sentense
void split_word(string s){
    string word = "";
    for(auto x: s){
        if(x==' '){
            reverse_word(word);
            word="";
        }else{
            word = word+x;
        }
    }
    reverse_word(word);
    
}


int main(){
    
    string str = "My name is Munna";
    
    split_word(str);
    
    return 0;
    
}
