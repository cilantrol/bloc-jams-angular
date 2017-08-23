/*Syntax Parser
a. program that reads your code and determines what it does and if its grammar is valid.
*/
/*Lexical Environment
a. where something sits physically in the code you write
*/
/*Execution Context
a. a wrapper to help manage the code that is running
b. there are lots of lexical enironments. Which is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.
*/
/*Name/Value Pair
 variable = Value
 */

 Object is a collection of name value pairs.
 Global Object = 'this'
 everytime code is run, its wrapped in a context where it creates the global object this
 global object (window) = this on the global level
