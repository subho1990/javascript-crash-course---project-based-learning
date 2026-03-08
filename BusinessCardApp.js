// Define the functions

function PrintCard()
{
    line1 = "<b> Name : </b>" + this.name + "<br/>\n";
    line2 = "<b> Address : </b>" + this.address + "<br/>\n";
    line3 = "<b> Work Phone : </b>" + this.workphone + "<br/>\n";
    line4 = "<b> Home Phone : </b>" + this.homephone + "<br/>\n<hr/>";
    document.write(line1, line2, line3, line4);
}

function Card(name, address, work, home)
{
    this.name = name;
    this.address = address;
    this.workphone = work;
    this.homephone = home;
    this.PrintCard = PrintCard;
}

// Create the objects
Pooja = new Card("Pooja Jaiswara", "Mandirtala, Howrah", "9830098300", "1234567890");
Sakshi = new Card("Sakshi Joshi", "Kolkata", "9830098300", "1234567890");
Zeeshan = new Card("Md. Zeeshanuddin", "Topsia, Kolkata", "9830098300", "1234567890");
Ajit = new Card("Ajit Gain", "Sonarpur, South 24 Parganas", "9830098300", "1234567890");
Prit = new Card("Prit Mondal", "Behala, Kolkata", "9830098300", "1234567890");

// Now print them
Pooja.PrintCard();
Sakshi.PrintCard();
Zeeshan.PrintCard();
Ajit.PrintCard();
Prit.PrintCard();