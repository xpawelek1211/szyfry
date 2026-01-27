/*
Szyfr Cezara

Program obsługuje jedynie litery alfabetu łacińskiego. Inne znaki są pozostawiane bez zmian.

Specyfikacja:
Wejście: n - liczba całkowita będąca przesunięciem liter, txt - tekst do zaszyfrowania
Wyjście: wynik - przekształcony tekst
*/

#include <iostream>
#include <string>
#include <cctype>
using namespace std;

int main() {
  int n;
  string txt, wynik="";
  cout<<"Tekst do zaszyfrowania: "; getline(cin, txt);
  cout<<"Przesuniecie: "; cin>>n;
  n = n % 26;

  for (int i = 0; i <= txt.size() - 1; i++) {
    if (isupper(txt[i])) {
      if (txt[i] + n > 'Z') {
        wynik += txt[i] + n - 26;
      } else if (txt[i] + n < 'A') {
        wynik += txt[i] + n + 26;
      } else {
        wynik += txt[i] + n;
      }
    } else if (islower(txt[i])) {
      if (txt[i] + n > 'z') {
        wynik += txt[i] + n - 26;
      } else if (txt[i] + n < 'a') {
        wynik += txt[i] + n + 26;
      } else {
        wynik += txt[i] + n;
      }
    } else {
      wynik += txt[i];
    }
  }

  cout<<wynik;
  return 0;
}
