function Set() {
    Xrm.Page.ui.controls.get("telephone1").setDisabled(true);
    var telephonenum = Xrm.Page.getAttribute("telephone1").getValue();
    alert(telephonenum);
    Xrm.Page.getAttribute("mobilephone").setValue(telephonenum);
  //  Xrm.Page.getAttribute("emailaddress1").setValue("bsameer1995@gmail.com");

}