/// Chapter 2 Lexical Structure

// 2.1  Character Set

// 2.2 Comments

// This is a single-line comment.
/* This is also a comment */ // and here is another comment.
/*
 * This is yet another comment
 * It has multiple lines
 */

// 2.3 Literals

// Literals are data values that appear directly in a program
// number literals:  12, 1.2
// string literals:  "hellow world", 'Hi'
// boolean literals:  true, false
// regular expression literal:  /javascript/gi
// abscence of an object literal:  null
// object initializer literal:  { x:1, Y:2 }
// array initializer literal:  [1,2,3,4,5]

// 2.4 Identifiers and Reserved Words

// Identifiers must begin with a letter, an underscore, or a dollar sign.
// Subsequent characters can be letters, digits, underscores, or dollar signs.
// (Digits are not allowed as the first character of an indentifier)
// Characters from the entire Unicode character set are permitted (allowing
//  variable names from non-English languages and mathmatical symbols

// Legal Identifiersi
// i, my_variable_name, v13, _dummy, $str

// Reserved words:
//  break, case, catch, continue, debugger, default
//  delete, do, else, false, finally, for
//  function, if, in, instanceof, new null
//  return, switch, this, throw, true, try
//  typeof, var, void, while, with
// Also reserved in ECMAScript 5 for future versions:
//  class, const, enum, export, extends, import, super
// Also resererved in strict mode:
//  implements, let, private, public, yield
//  interface, package, protected, static
//  arguments, eval
// ECMAScript 3 reserved all the keywords of the Java language:
//  abstract, boolean, byte, char, class, const
//  double, enum, export, extends, final, float
//  goto, implements, import, int, interface, long
//  native, package, private, protected, public, short
//  static, super, synchronized, throws, transient, volatile
// The following global variable and function names should be avoided:
//  arguments, Array, Boolean, Date, decodeURI, decodeURIComponent
//  encodeURI, encodeURIComponent, Error, eval, EvalError, Function
//  Infinity, isFinite, isNaN, JSON, Math, NaN
//  Number, Object, parseFloat, pareseInt, RangeError, RefereceError
//  RegExp, String, SyntaxError, TYpeError, undefined, URIError
// Implementations may defin other global variables and functions

// Optional Semicolons
// F@ck This - ALWAYS USE SEMICOLONS TO SEPERATE STATEMENTS
