var Monday =[['Mozzarella Caprese', 'Pea Falafel'],['Rare Roast Beef','Oaxacan Torta'],['Tuna'],['Turkey Tower', 'Chicken Caesar']];
var MondayDist=[20,20,10,50];
var Tuesday =[ ['ALT', 'Portobello Mushroom'],['Shredded Sirloin Banh MI','Ham & Brie'],['Tuna'],['Smoked Turkey', 'Buffalo Chicken']];
var TuesdayDist=[20,20,10,50];
var Wednesday =[ ['Roasted Asparagus', 'Vegelicious'],['Grilled Sliced Sirloin','Brooklyn Pastrami','Godfather'],['Tuna'],['Special Turkey', 'Bangkok Chicken']];
var WednesdayDist=[20,20,10,50];
var Thursday =[ ['Southwest Veggie','Pea Falafel'],['Corned Beef', 'B.A.T'],['Tuna'],['Turkey Tower', 'Souther Fried Chicken Breast']];
var ThursdayDist=[20,20,10,50];
var Friday =[ ['Focaccia'],['Godfather','Cubano'],['Tuna Club','Lobster Roll'],['Turkey & Apple Salad', 'Grilled Breast Chicken']];
var FridayDist=[10,20,30,40];
var Week=[Monday,Tuesday];
var midEastern=["Chicken Kebobs", "Beef Kebobs", " Shrimp Kebobs", "Vegetable Kebobs", "Israeli Cous Cous","Grilled Vegetables","Cucumber and Chick Pea Salad", "Humus & Chips", "Sliced Fruits"]
var midEasternPlat=[1,1,1,1,0,0,0,0,0];
var midEasternRel=[0,0,0,0,0,0,0,0,0];
var midEasternDist =[100,100,100,100,50,50,50,75,75];
var midEastera=[midEastern,midEasternDist,midEasternPlat, midEasternRel];
var dispName=["Disp", "TIN"];
var ceramicName=["Ceramic", "Metal"];
var relName=[" pp", " pcs"];
var ap= ["Five spiced chicken paillard","Salmon w/ Soy Ginger Glaze","Soba Noodles","Braised Bok Choy","Vegetable Spring Rolls","California Rolls","Pineapple lychee Skewers","CB"];
var apd=[50,50,50,50,200,200,75,75];
var app=[1,1,0,1,0,0,0,0];
var apprel=[0,0,0,0,0,0,0,0,0];
var apa=[ap,apd,app,apprel];
var mxf=["Grated cheese/Shredded lettuce/Dicced tomatoes/Corn salsa/Black bean/Salsa picante / Guacamole / Sour Cream","Chicken Fajita","Ground Beef Taco","Vegetable Chile","Rice & Beans","Tossed Salad","Tortilla Chips","Churros w/ dulce de leche"];
var mxfd=[100,50,50,50,50,75,75,75];
var mxfp=[0,1,1,1,1,0,0,0];
var mxfrel=[0,0,0,0,0,0,0,0,0];
var mxfa=[mxf,mxfd,mxfp,mxfrel];
var cock1=["Cubed fruit & Cheese","Crudite","Spiced Nuts","Cheese Straws","Chips & Dips"];
var cock1d=[50,50,50,50,50];
var cock1p=[0,0,0,0,0];
var cock1rel=[0,0,0,0,0,0,0,0,0];
var cock1a=[cock1,cock1d,cock1p,cock1rel]; 
var egg=["Scrambled eggs",".                                         .","Home Fries","Toast.                    ."];
var eggd=[100,300,100,100];
var eggp=[1,1,1,1];
var eggrel=[0,1,0,0,0,0,0,0,0];
var egga=[egg,eggd,eggp,eggrel];
var chick=["                           .","Basmati Rice","                   .","      MX     .","Sliced fruits","Cookies and brownies"];
var chickd=[100,75,75,75,50,50];
var chickp=[1,1,0,0,0,0];
var chickrel=[0,0,0,0,0,0,0,0,0];
var chicka=[chick,chickd,chickp,chickrel];
var salmon=["                           ","Wild Rice & Orzo","                   .","      MX     ","Sliced fruits","Cookies and brownies"];
var salmond=[100,75,75,75,50,50];
var salmonp=[1,1,0,0,0,0];
var salmonrel=[0,0,0,0,0,0,0,0,0];
var salmona=[salmon,salmond,salmonp,salmonrel];
var plates=[ {text: "Middle East", value:0},{text: "Mexican Fiesta", value:1},{text: "Cocktail 1", value:2},
{text: "Asian Price", value:3},{text:"Scrambled egss",value:4},{text:"Chicken price",value:5}, {text:"Salmon Price",value:6}];
var platerrs=[midEastera,mxfa,cock1a,apa,egga,chicka,salmona];