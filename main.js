//i
    //create elements on the dom
    const allList = document.getElementById('showList');
    //const showAllElements = allList.children;
    let newLi = document.createElement('li');
    let newLi1 = document.createElement('li');
    newLi.textContent = 'three';
    newLi1.textContent = 'four';
    allList.appendChild(newLi);
    allList.appendChild(newLi1);
   // console.log(allList);
   //

//ii
    //show_node
    const myChildNode = document.getElementById('showNode');
    const showMyNode = myChildNode.childNodes;//shows everything, including space ...
    const showMyChildren = myChildNode.children;//shows tags ...
    //console.log(showMyChildren);
    //create a span inside the div
    let addSpan = document.createElement('span');
    addSpan.textContent = 'this is the text inside the newly created span';
    myChildNode.appendChild(addSpan);
    //
//iii
    //entirely creating parent and child element from js ...
    const myUl = document.createElement('ul');
    myUl.className = 'my_ul_class';
    console.log(myUl);
    let addLI = document.createElement('li'); 
    let addLI1 = document.createElement('li'); 
    let addLI2 = document.createElement('li'); 
    //
    addLI.textContent = 'this is first li';
    addLI1.textContent = 'this is second li';
    addLI2.textContent = 'this is third li'; 
    //
    myUl.appendChild(addLI);
    myUl.appendChild(addLI1);
    myUl.appendChild(addLI2);
    //since we are creating it from scratch, let's append it to the body
    document.body.appendChild(myUl);
    //
//iv delete elements
    //delete element without event ...
    // const deleteLi = document.querySelector('.my_ul_class');
    // let child_li = deleteLi.getElementsByTagName('li')[0];
    // deleteLi.removeChild(child_li);//deleted the first element ...
    //
//v, delete with function
    function dltButton(){
        const deleteLi = document.querySelector('.my_ul_class');
        let child_li = deleteLi.getElementsByTagName('li')[0];
        deleteLi.removeChild(child_li);
    }
    //
//vi create image 
        const existingDiv = document.getElementById('existing_div');
        const myImage = document.createElement('img');
        myImage.src = "https://images.unsplash.com/photo-1688053793446-197dbc86e237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60";
        myImage.style.borderRadius = "10%";
        existingDiv.appendChild(myImage);
        //
//vii  create table
        //
        const tableFrameOnHtml = document.getElementById('given_table'); 

        let myTable = document.createElement('table');
        //row for header  I
        let myHeaderRow = document.createElement('tr');
        //create table headers
        let nameHeader = document.createElement('th');
        let professionHeader = document.createElement('th');
        let addressHeader = document.createElement('th');
        //
        nameHeader.textContent = 'Name';
        professionHeader.textContent = 'Profession';
        addressHeader.textContent = 'Address';
        //append header to the header-row
        myHeaderRow.appendChild(nameHeader);
        myHeaderRow.appendChild(professionHeader);
        myHeaderRow.appendChild(addressHeader);
        //
        //tableFrameOnHtml.appendChild(myHeaderRow);
        //do the same for tabel-data(td) II
        let myDataRow = document.createElement('td');
        //
        let nameData = document.createElement('td');
        let professionData = document.createElement('td');
        let addressData = document.createElement('td');
        //
        nameData.textContent = 'Marko';
        professionData.textContent = 'Accountant';
        addressData.textContent = 'Paris';
        //
        myDataRow.appendChild(nameData);
        myDataRow.appendChild(professionData);
        myDataRow.appendChild(addressData);
        //append both header and data on the dom
        tableFrameOnHtml.appendChild(myHeaderRow);
        tableFrameOnHtml.appendChild(myDataRow);

//viii create select with option ...




        
   