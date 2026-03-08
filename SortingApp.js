//initialize the counter and the array.
var NumNames = 0;
var Names = new Array();
function SortNames()
{
    // Get the name from the text field.
    GetTheName = document.InputForm.NewName.value; 
    // Add the name to the array.
    Names[NumNames] = GetTheName;
    // Increment the counter.
    NumNames ++;
    // Sort the array.
    Names.sort();
    document.InputForm.SortedNames.value = Names.join("\n");
}