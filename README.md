# vacuous-capybaras

This is a solution to a condensed and altered version of a Brazilian Maths Olympiad logic-based problem

## The problem
Assume the following two sentences are both true:

**Person X always lies.**

**Person X says "All my Capybaras are white."**

Of the following statements A and B, which can we conclude from the initial two sentences? Give a JavaScript based solution.

 <b>Statement A:</b> 
  ***Person X has no Capybaras.***
  
 <b>Statement B:</b>
  ***Person X has at least one Capybara.***
  
## Understanding the problem 
When going about solving this, the first step should be to deconstruct and understand the problem. It is a good idea to construct a conditional statement from the question. For example, with ***"Person A always lies"*** being the antecedent statement, we can take ***"All my Capybaras are white"*** to be incorrect for at least one condition of our conclusion. The task then becomes to figure out which of Statement A and Statement B allow this to be the case. To do this, we should take the two statements and group them individually such that we can test whether the logic checks out. Since we are told to provide a solution in JavaScript, it makes sense to represent the two statements as arrays of capybaras, the elements of which describe their colour. It's important to realise that the statements only control the length of our arrays and not the attributes of their elements.
Therefore, we can think of Statement A as an empty array (since the statement requires it to contain no elements) and Statement B as an array of length ≥1, the elements of which are not specified.

## The solution
Attempting to think of a solution in terms of real-world practicality can easily lead one to a false conclusion, which could then be backed up with flawed JS logic. It is important to understand that we are concerned with mathematical truth and not real-world practicality. For example, one may be drawn to immediately assume ***"If person X has no capybaras, then none of them can be white. If person X has at least one capybara, where person X has only one capybara, it may be a colour other than white and where person X has >1 capybara, at least one may be a colour other than white. Therefore we can conclude either statement from the initial two sentences"*** However, when we analyse each of the statements using an objective method, we find that only one of them can be correctly concluded. To show this, we take the two arrays that we constructed and apply the 'every' method to check if there is a condition where their elements can reach the requirements necessary. The function we can use for this is:

```
// Function to check if all capybaras are white
function areAllCapybarasWhite(capybaras) {
  return capybaras.every(capybara => capybara === 'white');
}
```

We can apply this function to an empty array representing Statement A as such: 

```
// An array representing capybaras owned by Person A, it's empty because Person A has no capybaras
const capybarasA = [];

// Check if every capybara owned by Person A is white
const allCapybarasAreWhiteA = areAllCapybarasWhite(capybarasA);
```

Upon logging what's returned, we find that the statement "All my capybaras are white" is ***true*** when passed on an array containing 0 capybaras. Therefore, Person A would not be lying in this case and we can not correctly conclude statement A. 

The same application of the function to an array representing Statement B would be as such:

```
// An array representing capybaras owned by Person B, they have at least one capybara that is not white
const capybarasB = ['white', 'black'];

// Check if every capybara owned by Person B is white
const allCapybarasAreWhiteB = areAllCapybarasWhite(capybarasB);
```

In this case, this would log ***false*** as the inclusion of the element 'black' would contradict the function. We have therefore shown that there is a condition for Statement B in which Person A is lying. Therefore, we can correctly conclude this statement.

## Why?

It seems entirely counterintuitive that the statement "All my capybaras are white" is true when the person has no capybaras. This solution relies on the fact that the 'every' method always returns true on an empty array. The answer to why this is the case is a concept in logic called **vacuous truth**. Vacuous truth can be explained like this: 


***There are no elements in a given set***

 ***Therefore there are no elements which do not have a given property***
 
  ***Therefore any given property is true by default***
  
  A logical follow-up question would be ***At the same time, there are no elements which DO have a given property in an empty set, so why isn't any given property false by default?***
  
  The answer lies in the nature of the question, in that it is a question of quantity as opposed a question of existence. In formal logic, a universally quantified statement can be defined as: 

`("for all x, P(x)")`

A universally quantified statement is defined as being true when there are no instances of it being false. 
If our problem was concerned with a statement of existence: 

`("there exists an x such that P(x)")`

Then there is an argument to be made that Statement A can be correctly assumed. However, it is not appropriate in this case to use existence-based logic due to the wording of the problem. We are not attempting to confirm the existence of a white capybara/white capybaras in given sets. Conversely, we are trying to prove a specific statement to be false: ***"All my capybaras are white"*** - which is a universally quantified statement, not an existential one. To make this more intuitive, here is another example statement: 

`All my pet unicorns have floppy ears.`

It is a given that unicorns do not exist. What we are concerned with is therefore not the existence of said unicorns, but whether or not a specified quanitity can be assumed to possess a specified property. As there are by definition no unicorns which do **NOT** have floppy ears, the assertion that all of them do is true by default. Relating this back, a statement asserting that Person A has no capybaras is delivered with the same sentiment as ***All my pet unicorns have floppy ears.*** and therefore the logic is the same. Person A has no capybaras which are by necessity not white, thus all of person A's capybaras are white, and they would not be lying in saying so.
