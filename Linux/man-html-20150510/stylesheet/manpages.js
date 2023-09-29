
var license_node;
var show_node;
var hide_node;

function init() {

// Copyright info is wrapped inside a div whose class is "license".

  var parr=document.getElementsByTagName("div");

  var i;
  var n;
  var j= -1;

  for (i=0; i<parr.length; i++)
  {
    if (parr[i].className == "license")
    {
	n=parr[i];
    }
  }

  if (n)
  {
	for (i=0; i<n.childNodes.length; i++)
	{
		if (n.childNodes[i].nodeType == 1)
		{
			j=i;
			break;
		}
	}
  }

  if (j >= 0)
  {
	license_node=n.childNodes[j];

	license_node.setAttribute("className", "licensetext");
	license_node.setAttribute("class", "licensetext");

	// This is the table that contains the license text.  Create two DOM
	// structures right before it, one to display the license, one
	// to hide it.

	var a=document.createElement("a");

	a.appendChild(document.createTextNode("(view this manual page's license and copyright)"));
	a.setAttribute("href", "javascript:showlicense()");

	show_node=document.createElement("p");

	show_node.appendChild(a);
	show_node.setAttribute("id","showlicenselink");
	show_node.setAttribute("class", "showlicenselink");
	show_node.style.display='block';

	license_node.parentNode.insertBefore(show_node, license_node);

	a=document.createElement("a");
	a.appendChild(document.createTextNode("(hide this manual page's license and copyright)"));
	a.setAttribute("href", "javascript:hidelicense()");

	hide_node=document.createElement("p");

	hide_node.appendChild(a);
	hide_node.setAttribute("id","hidelicenselink");
	hide_node.setAttribute("class", "hidelicenselink");
	hide_node.style.display='none';

	license_node.parentNode.insertBefore(hide_node, license_node);

	// We can show the whole thing, now.

	n.style.display='block';

	license_node.style.display='none';
  }
}

function showlicense() {
  hide_node.style.display='block';
  license_node.style.display='block';
  show_node.style.display='none';
}

function hidelicense() {
  license_node.style.display='none';
  hide_node.style.display='none';
  show_node.style.display='block';
}
