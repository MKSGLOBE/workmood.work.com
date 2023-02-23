
const api_url = "json/countrywithflag.json";
$(document).ready(function () {
 // getapi();
});





let checkIsemailValidBrand = false;
function saveBrandData() {
  const bname = document.getElementById("bname");
  const bcompanyname = document.getElementById("bcompanyname");
  const monumber = document.getElementById("monumber");
  const bemail = document.getElementById("bemail");
  const country = document.getElementById("country");
  const bmessage = document.getElementById("bmessage");

  // console.log('country===',country.value);
  if (bname.value == "" || bname.value == undefined) {
    $("#bname").addClass("errorx");
    // document.getElementById("bnamemessage").style.display = "block";
  } else {
    $("#bname").removeClass("errorx");
    // document.getElementById("bnamemessage").style.display = "none";
  }
  if (bcompanyname.value == "" || bcompanyname.value == undefined) {
    $("#bcompanyname").addClass("errorx");
    // document.getElementById("bnamemessage").style.display = "block";
  } else {
    $("#bcompanyname").removeClass("errorx");
    // document.getElementById("bnamemessage").style.display = "none";
  }
  if (monumber.value == "" || monumber.value == undefined) {
    $("#monumber").addClass("errorx");
    // document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#monumber").removeClass("errorx");
    // document.getElementById("monumbermessage").style.display = "none";
  }
  if (bemail.value == "" || bemail.value == undefined) {
    $("#bemail").addClass("errorx");
    // document.getElementById("bemailmessage").style.display = "block";
  } else {
    $("#bemail").removeClass("errorx");
    // document.getElementById("bemailmessage").style.display = "none";
  }
  if (
    country.value == "Select Country*" ||
    country.value == "" ||
    country.value == undefined
  ) {
    $("#country").addClass("errorx");
    // document.getElementById("businessmessage").style.display = "block";
  } else {
    $("#country").removeClass("errorx");
    // document.getElementById("businessmessage").style.display = "none";
  }
  if (bmessage.value == "" || bmessage.value == undefined) {
    $("#bmessage").addClass("errorx");
    //  document.getElementById("bmessagemessage").style.display = "block";
  } else {
    $("#bmessage").removeClass("errorx");
    // document.getElementById("bmessagemessage").style.display = "none";
  }
  if (bemail.value !== "" && bemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(bemail.value.trim())) {
      checkIsemailValidBrand = true;
      $("#bemail").removeClass("errorx");
      // document.getElementById("bemailmessage").style.display = "none";
    } else {
      checkIsemailValidBrand = false;
      $("#bemail").addClass("errorx");
      // document.getElementById("bemailmessage").style.display = "block";
    }
  }
  // console.log('checkIsemailValidBrand==',checkIsemailValidBrand);
  if (
    bname.value !== "" &&
    bname.value !== undefined &&
    monumber.value !== "" &&
    monumber.value !== undefined &&
    bemail.value !== "" &&
    bemail.value !== undefined &&
    bcompanyname.value !== "" &&
    bcompanyname.value !== undefined &&
    bmessage.value !== "" &&
    bmessage.value !== undefined &&
    country.value !== "Select Country*" &&
    country.value !== "" &&
    country.value !== undefined &&
    checkIsemailValidBrand == true
  ) {
    $("#brandsubmitbtn").html("Submitting......");
    $("#brandsubmitbtn").prop("disabled", true);
    // Toastify({
    //   text: "Successfully Submit",
    //   gravity: "top",
    //   position:"center",
    //   style: {
    //     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   },
    //   offset: {
    //     x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    //     y: 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    //   },
    // }).showToast();
    const bodyData = {
      name: bname.value,
      mobile: monumber.value,
      email: bemail.value,
      company: bcompanyname.value,
      description: bmessage.value,
      country: country.value,
    };
    $.ajax({
      url: "https://api.myclinicalnutrition.com/fastmedia/quote/",
      contentType: "application/json; charset=utf-8",
      type: "post",
      data: JSON.stringify(bodyData),
      success: function (response) {
        $("#brandsubmitbtn").html("Submit");
        $("#brandsubmitbtn").removeAttr("disabled");
        // $("#exampleModal").modal("hide");
        // $("#sucessmessage").modal("show");
        $("input:text").val("");
        $("#bemail").val("");
        $("#monumber").val("");
        $("#bmessage").val("");
        $("#country").val("");
        Toastify({
          text: "Successfully Submit",
          gravity: "top",
          position: "center",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          offset: {
            x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        }).showToast();
        // setTimeout(function () {
        //   $("#sucessmessage").modal("hide");
        // }, 5000);
      },
      error: function (textStatus, errorThrown) {
        $("#brandsubmitbtn").html("Submit");
        $("#brandsubmitbtn").removeAttr("disabled");
      },
    });
  }
}
var sadb;
function saveApplication() {
  // Toastify({
  //   text: "Successfully Submit",
  //   gravity: "top",
  //   position:"center",
  //   style: {
  //    background: "linear-gradient(to right, #00b09b, #96c93d)",
  // },
  //   offset: {
  //     x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
  //     y: 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
  //   },
  // }).showToast();
  //getapi();
  const bname = document.getElementById("bname");
  // const bcompanyname = document.getElementById("bcompanyname");
  const monumber = document.getElementById("monumber");
  const bemail = document.getElementById("bemail");
  // const country = document.getElementById("country");
  const bmessage = document.getElementById("bmessage");
  //console.log('country===',country.value);
  var applicationfresume = document.getElementById("fileUpload").files;
  // console.log('applicationfresume===', applicationfresume.length);
  // console.log('applicationfresume===', applicationfresume[0].name);
  // console.log('sadb===', sadb);

  if (bname.value == "" || bname.value == undefined) {
    $("#bname").addClass("errorx");
    // document.getElementById("bnamemessage").style.display = "block";
  } else {
    $("#bname").removeClass("errorx");
    // document.getElementById("bnamemessage").style.display = "none";
  }
  if (monumber.value == "" || monumber.value == undefined) {
    $("#monumber").addClass("errorx");
    // document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#monumber").removeClass("errorx");
    // document.getElementById("monumbermessage").style.display = "none";
  }
  // if (bcompanyname.value == "" || bcompanyname.value == undefined) {
  //   $("#bcompanyname").addClass("errorx");
  //   // document.getElementById("bnamemessage").style.display = "block";
  // } else {
  //   $("#bcompanyname").removeClass("errorx");
  //   // document.getElementById("bnamemessage").style.display = "none";
  // }
  if (applicationfresume.length == 0) {
    $("#fileUpload").addClass("errorx");
    // document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#fileUpload").removeClass("errorx");
    // document.getElementById("monumbermessage").style.display = "none";
  }
  if (bemail.value == "" || bemail.value == undefined) {
    $("#bemail").addClass("errorx");
    // document.getElementById("bemailmessage").style.display = "block";
  } else {
    $("#bemail").removeClass("errorx");
    // document.getElementById("bemailmessage").style.display = "none";
  }
  if (bname.value == "" || bname.value == undefined) {
    $("#bname").addClass("errorx");
    // document.getElementById("bnamemessage").style.display = "block";
  } else {
    $("#bname").removeClass("errorx");
    // document.getElementById("bnamemessage").style.display = "none";
  }
  // if (country.value == "Select Country*" || country.value == "" || country.value == undefined) {
  //   $("#country").addClass("errorx");
  //   // document.getElementById("businessmessage").style.display = "block";
  // } else {
  //   $("#country").removeClass("errorx");
  //   // document.getElementById("businessmessage").style.display = "none";
  // }
  if (bmessage.value == "" || bmessage.value == undefined) {
    $("#bmessage").addClass("errorx");
    //  document.getElementById("bmessagemessage").style.display = "block";
  } else {
    $("#bmessage").removeClass("errorx");
    // document.getElementById("bmessagemessage").style.display = "none";
  }
  if (bemail.value !== "" && bemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(bemail.value.trim())) {
      checkIsemailValidBrand = true;
      $("#bemail").removeClass("errorx");
      // document.getElementById("bemailmessage").style.display = "none";
    } else {
      checkIsemailValidBrand = false;
      $("#bemail").addClass("errorx");
      // document.getElementById("bemailmessage").style.display = "block";
    }
  }
  // console.log('checkIsemailValidBrand==',checkIsemailValidBrand);

  if (
    bname.value !== "" &&
    bname.value !== undefined &&
    monumber.value !== "" &&
    monumber.value !== undefined &&
    bemail.value !== "" &&
    bemail.value !== undefined &&
    applicationfresume.length > 0 &&
    bmessage.value !== "" &&
    bmessage.value !== undefined &&
    checkIsemailValidBrand == true
  ) {
    $("#brandsubmitbtn").html("Submitting......");
    $("#brandsubmitbtn").prop("disabled", true);
    // Toastify({
    //   text: "Successfully Submit",
    //   gravity: "top",
    //   position:"center",
    //   style: {
    //     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   },
    //   offset: {
    //     x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    //     y: 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    //   },
    // }).showToast();
    const bodyData = {
      name: bname.value,
      mobile: monumber.value,
      email: bemail.value,
      resume: sadb,
      coverletter: bmessage.value,
    };
    $.ajax({
      url: "https://uapi.oneaxcess.com/applicationform",
      contentType: "application/json; charset=utf-8",
      type: "post",
      data: JSON.stringify(bodyData),
      success: function (response) {
        $("#brandsubmitbtn").html("Submit");
        $("#brandsubmitbtn").removeAttr("disabled");
        // $("#exampleModal").modal("hide");
        // $("#sucessmessage").modal("show");
        $("input:text").val("");
        $("#bemail").val("");
        $("#monumber").val("");
        $("#bmessage").val("");
        $("#fileUpload").val("");
        Toastify({
          text: "Successfully Submit",
          gravity: "top",
          position: "center",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          offset: {
            x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        }).showToast();
        // setTimeout(function () {
        //   $("#sucessmessage").modal("hide");
        // }, 5000);
      },
      error: function (textStatus, errorThrown) {
        $("#brandsubmitbtn").html("Submit");
        $("#brandsubmitbtn").removeAttr("disabled");
      },
    });
  }
}
function saveContactUs() {
  //getapi();
  
  const bname = document.getElementById("bname");
  const monumber = document.getElementById("monumber");
  const bemail = document.getElementById("bemail");
  const location = document.getElementById("location");
   const bmessage = document.getElementById("bmessage");
  


  if (bname.value == "" || bname.value == undefined) {
    $("#bname").addClass("errorx");
  } else {
    $("#bname").removeClass("errorx");

  }

  if (monumber.value == "" || monumber.value == undefined) {
    $("#monumber").addClass("errorx");
    // document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#monumber").removeClass("errorx");
    // document.getElementById("monumbermessage").style.display = "none";
  }
  if (bemail.value == "" || bemail.value == undefined) {
    $("#bemail").addClass("errorx");
    // document.getElementById("bemailmessage").style.display = "block";
  } else {
    $("#bemail").removeClass("errorx");
    // document.getElementById("bemailmessage").style.display = "none";
  }
  if (location.value == "" || location.value == undefined) {
    $("#location").addClass("errorx");
  } else {
    $("#location").removeClass("errorx");

  }
  // if (country.value == "Select Country*" || country.value == "" || country.value == undefined) {
  //   $("#country").addClass("errorx");
  //   // document.getElementById("businessmessage").style.display = "block";
  // } else {
  //   $("#country").removeClass("errorx");
  //   // document.getElementById("businessmessage").style.display = "none";
  // }
  if (bmessage.value == "" || bmessage.value == undefined) {
    $("#bmessage").addClass("errorx");
    //  document.getElementById("bmessagemessage").style.display = "block";
  } else {
    $("#bmessage").removeClass("errorx");
    // document.getElementById("bmessagemessage").style.display = "none";
  }
  if (bemail.value !== "" && bemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(bemail.value.trim())) {
      checkIsemailValidBrand = true;
      $("#bemail").removeClass("errorx");
      // document.getElementById("bemailmessage").style.display = "none";
    } else {
      checkIsemailValidBrand = false;
      $("#bemail").addClass("errorx");
      // document.getElementById("bemailmessage").style.display = "block";
    }
  }
  // console.log('checkIsemailValidBrand==',checkIsemailValidBrand);

  if (
    bname.value !== "" &&
    bname.value !== undefined &&
    monumber.value !== "" &&
    monumber.value !== undefined &&
    bemail.value !== "" &&
    bemail.value !== undefined &&
    location.value !== "" &&
    location.value !== undefined &&
    bmessage.value !== "" &&
    bmessage.value !== undefined &&
    checkIsemailValidBrand == true
  ) {
    $("#brandsubmitbtn").html("Submitting......");
    $("#brandsubmitbtn").prop("disabled", true);
    // Toastify({
    //   text: "Successfully Submit",
    //   gravity: "top",
    //   position:"center",
    //   style: {
    //     background: "linear-gradient(to right, #00b09b, #96c93d)",
    //   },
    //   offset: {
    //     x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
    //     y: 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
    //   },
    // }).showToast();
    const bodyData = {
      name: bname.value,
      mobile: monumber.value,
      email: bemail.value,
      // company: bcompanyname.value,
      note: bmessage.value,
    };
    $.ajax({
      url: "https://uapi.oneaxcess.com/fmcontactustest",
      contentType: "application/json; charset=utf-8",
      type: "post",
      data: JSON.stringify(bodyData),
      success: function (response) {
        $("#brandsubmitbtn").html("Submit");
        $("#brandsubmitbtn").removeAttr("disabled");
        // $("#exampleModal").modal("hide");
        // $("#sucessmessage").modal("show");
        $("input:text").val("");
        $("#bemail").val("");
        $("#monumber").val("");
        $("#bmessage").val("");
        Toastify({
          text: "Successfully Submit",
          gravity: "top",
          position: "center",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          offset: {
            x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: 0, // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        }).showToast();
        // setTimeout(function () {
        //   $("#sucessmessage").modal("hide");
        // }, 5000);
      },
      error: function (textStatus, errorThrown) {
        $("#brandsubmitbtn").html("Submit");
        $("#brandsubmitbtn").removeAttr("disabled");
      },
    });
  }
}
function brandValidationOnkeyUpBname() {
  const bname = document.getElementById("bname");
  if (bname.value == "" || bname.value == undefined) {
    $("#bname").addClass("errorx");
    // document.getElementById("bnamemessage").style.display = "block";
  } else {
    $("#bname").removeClass("errorx");
    // document.getElementById("bnamemessage").style.display = "none";
  }
}
function brandValidationOnkeyUpLocation() {
  const location = document.getElementById("location");
  if (location.value == "" || location.value == undefined) {
    $("#location").addClass("errorx");
    // document.getElementById("bnamemessage").style.display = "block";
  } else {
    $("#location").removeClass("errorx");
    // document.getElementById("bnamemessage").style.display = "none";
  }
}
function brandValidationOnkeyUpMobileNo() {
  const monumber = document.getElementById("monumber");
  if (monumber.value == "" || monumber.value == undefined) {
    $("#monumber").addClass("errorx");
    //document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#monumber").removeClass("errorx");
    //document.getElementById("monumbermessage").style.display = "none";
  }
}
function brandValidationOnkeyUpCompany() {
  const bcompanyname = document.getElementById("bcompanyname");
  if (bcompanyname.value == "" || bcompanyname.value == undefined) {
    $("#bcompanyname").addClass("errorx");
    //document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#bcompanyname").removeClass("errorx");
    //document.getElementById("monumbermessage").style.display = "none";
  }
}
function brandValidationOnkeyUpFileUploadSelection() {
  const applicationfresume = document.getElementById("fileUpload").files;
  if (applicationfresume.length == 0) {
    $("#fileUpload").addClass("errorx");
    //document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#fileUpload").removeClass("errorx");
    //document.getElementById("monumbermessage").style.display = "none";
  }
}
function brandValidationOnkeyUpCountrySelection() {
  const country = document.getElementById("country");
  if (
    country.value == "Select Country*" ||
    country.value == "" ||
    country.value == undefined
  ) {
    $("#country").addClass("errorx");
    //document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#country").removeClass("errorx");
    //document.getElementById("monumbermessage").style.display = "none";
  }
}
function brandValidationOnkeyUpCompany() {
  const bcompanyname = document.getElementById("bcompanyname");
  if (bcompanyname.value == "" || bcompanyname.value == undefined) {
    $("#bcompanyname").addClass("errorx");
    //document.getElementById("monumbermessage").style.display = "block";
  } else {
    $("#bcompanyname").removeClass("errorx");
    //document.getElementById("monumbermessage").style.display = "none";
  }
}
function brandValidationOnkeyUpEmail() {
  const bemail = document.getElementById("bemail");
  if (bemail.value == "" || bemail.value == undefined) {
    $("#bemail").addClass("errorx");
    //document.getElementById("validbemailmessage").style.display = "none";
    //document.getElementById("bemailmessage").style.display = "block";
  } else {
    $("#bemail").removeClass("errorx");
    // document.getElementById("bemailmessage").style.display = "none";
  }
  if (bemail.value !== "" && bemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(bemail.value.trim())) {
      checkIsemailValidBrand = true;
      // document.getElementById("validbemailmessage").style.display = "none";
      $("#bemail").removeClass("errorx");
    } else {
      checkIsemailValidBrand = false;
      // document.getElementById("validbemailmessage").style.display = "block";
      $("#bemail").addClass("errorx");
    }
  }
}
function brandValidationOnkeyUpBusinessName() {
  const business = document.getElementById("business");
  if (business.value == "" || business.value == undefined) {
    $("#business").addClass("errorx");
    // document.getElementById("businessmessage").style.display = "block";
  } else {
    $("#business").removeClass("errorx");
    // document.getElementById("businessmessage").style.display = "none";
  }
}
function brandValidationOnkeyUpMessage() {
  const bmessage = document.getElementById("bmessage");
  if (bmessage.value == "" || bmessage.value == undefined) {
    $("#bmessage").addClass("errorx");
    // document.getElementById("bmessagemessage").style.display = "block";
  } else {
    $("#bmessage").removeClass("errorx");
    // document.getElementById("bmessagemessage").style.display = "none";
  }
}
function cleanForm() {
  // $("input:text").val("");
  $("input").removeClass("errorx");
  $("#bmessage").removeClass("errorx");
  $("#cmessage").removeClass("errorx");
}

function brandValidationOnkeyUp() {
  const bname = document.getElementById("bname");
  const monumber = document.getElementById("monumber");
  const bemail = document.getElementById("bemail");
  const business = document.getElementById("business");
  const bmessage = document.getElementById("bmessage");

  if (bname.value == "" || bname.value == undefined) {
    document.getElementById("bnamemessage").style.display = "block";
  } else {
    document.getElementById("bnamemessage").style.display = "none";
  }
  if (monumber.value == "" || monumber.value == undefined) {
    document.getElementById("monumbermessage").style.display = "block";
  } else {
    document.getElementById("monumbermessage").style.display = "none";
  }
  if (bemail.value == "" || bemail.value == undefined) {
    document.getElementById("validbemailmessage").style.display = "none";
    document.getElementById("bemailmessage").style.display = "block";
  } else {
    document.getElementById("bemailmessage").style.display = "none";
  }
  if (business.value == "" || business.value == undefined) {
    document.getElementById("businessmessage").style.display = "block";
  } else {
    document.getElementById("businessmessage").style.display = "none";
  }
  if (bmessage.value == "" || bmessage.value == undefined) {
    document.getElementById("bmessagemessage").style.display = "block";
  } else {
    document.getElementById("bmessagemessage").style.display = "none";
  }
  if (bemail.value !== "" && bemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(bemail.value.trim())) {
      document.getElementById("validbemailmessage").style.display = "none";
    } else {
      document.getElementById("validbemailmessage").style.display = "block";
    }
  }
}
let checkIsemailValidCreator = false;
function saveCreatorData() {
  let channelSocialName = [];
  const cname = document.getElementById("cname");
  const cemail = document.getElementById("cemail");
  // const channelname = document.getElementById("channelname");
  var channelsocialUrl = document.getElementsByName("channelname[]");
  console.log("channelsocialUrl====", channelsocialUrl.length);
  //console.log('channelsocialUrl====', channelsocialUrl);
  for (let i = 0; i < channelsocialUrl.length; i++) {
    console.log("channelsocialUrl===", channelsocialUrl[i].value);
    channelSocialName.push(channelsocialUrl[i].value);
  }
  console.log("channelSocialName===", channelSocialName);
  const service = document.getElementById("service");
  const cmessage = document.getElementById("cmessage");

  if (cname.value == "" || cname.value == undefined) {
    $("#cname").addClass("errorx");
    // document.getElementById("cnamemessage").style.display = "block";
  } else {
    $("#cname").removeClass("errorx");
    // document.getElementById("cnamemessage").style.display = "none";
  }
  if (cemail.value == "" || cemail.value == undefined) {
    $("#cemail").addClass("errorx");
    // document.getElementById("cemailmessage").style.display = "block";
  } else {
    $("#cemail").removeClass("errorx");
    // document.getElementById("cemailmessage").style.display = "none";
  }
  // if (channelname.value == "" || channelname.value == undefined) {
  //   $("#channelname").addClass("errorx");
  //   // document.getElementById("channelnamemessage").style.display = "block";
  // } else {
  //   $("#channelname").removeClass("errorx");
  //   // document.getElementById("channelnamemessage").style.display = "none";
  // }
  if (
    channelsocialUrl[0].value == "" ||
    channelsocialUrl[0].value == undefined
  ) {
    $("#channelname").addClass("errorx");
    // document.getElementById("channelnamemessage").style.display = "block";
  } else {
    $("#channelname").removeClass("errorx");
    // document.getElementById("channelnamemessage").style.display = "none";
  }

  if (service.value == "" || service.value == undefined) {
    $("#service").addClass("errorx");
    // document.getElementById("servicemessage").style.display = "block";
  } else {
    $("#service").removeClass("errorx");
    // document.getElementById("servicemessage").style.display = "none";
  }
  if (cmessage.value == "" || cmessage.value == undefined) {
    $("#cmessage").addClass("errorx");
    // document.getElementById("cmessagemessage").style.display = "block";
  } else {
    $("#cmessage").removeClass("errorx");
    // document.getElementById("cmessagemessage").style.display = "none";
  }
  if (cemail.value !== "" && cemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(cemail.value.trim())) {
      $("#cemail").removeClass("errorx");
      checkIsemailValidCreator = true;
      // document.getElementById("cemailmessage").style.display = "none";
    } else {
      $("#cemail").addClass("errorx");
      checkIsemailValidCreator = false;
      // document.getElementById("cemailmessage").style.display = "block";
    }
  }
  // console.log("checkIsemailValidCreator==", checkIsemailValidCreator);
  if (
    cname.value !== "" &&
    cname.value !== undefined &&
    channelsocialUrl[0].value !== "" &&
    channelsocialUrl[0].value !== undefined &&
    cemail.value !== "" &&
    cemail.value !== undefined &&
    service.value !== "" &&
    service.value !== undefined &&
    cmessage.value !== "" &&
    cmessage.value !== undefined &&
    checkIsemailValidCreator == true
  ) {
    $("#creatorsubmitbtn").html("Submitting......");
    $("#creatorsubmitbtn").prop("disabled", true);
    const bodyData = {
      name: cname.value,
      channel: channelSocialName,
      email: cemail.value,
      service: service.value,
      message: cmessage.value,
    };
    $.ajax({
      url: "test",
      contentType: "application/json; charset=utf-8",
      type: "post",
      data: JSON.stringify(bodyData),
      success: function (response) {
        // clearForm();
        // sentText(response.message);
        $("#creatorsubmitbtn").html("Submit");
        $("#creatorsubmitbtn").removeAttr("disabled");
        $("#newModal").modal("hide");
        $("#sucessmessage").modal("show");
        $("input:text").val("");
        $("#cemail").val("");
        $("#cmessage").val("");
        setTimeout(function () {
          $("#sucessmessage").modal("hide");
        }, 5000);
      },
      error: function (textStatus, errorThrown) {
        $("#creatorsubmitbtn").html("Submit");
        $("#creatorsubmitbtn").removeAttr("disabled");
      },
    });
  }
}

function creatorValidationOnkeyUp() {
  const cname = document.getElementById("cname");
  const cemail = document.getElementById("cemail");
  const channelname = document.getElementById("channelname");
  const service = document.getElementById("service");
  const cmessage = document.getElementById("cmessage");

  if (cname.value == "" || cname.value == undefined) {
    document.getElementById("cnamemessage").style.display = "block";
  } else {
    document.getElementById("cnamemessage").style.display = "none";
  }
  if (channelname.value == "" || channelname.value == undefined) {
    document.getElementById("channelnamemessage").style.display = "block";
  } else {
    document.getElementById("channelnamemessage").style.display = "none";
  }
  if (cemail.value == "" || cemail.value == undefined) {
    document.getElementById("cemailmessage").style.display = "block";
  } else {
    document.getElementById("cemailmessage").style.display = "none";
  }
  if (service.value == "" || service.value == undefined) {
    document.getElementById("businessmessage").style.display = "block";
  } else {
    document.getElementById("businessmessage").style.display = "none";
  }
  if (cmessage.value == "" || cmessage.value == undefined) {
    document.getElementById("cmessagemessage").style.display = "block";
  } else {
    document.getElementById("cmessagemessage").style.display = "none";
  }
  if (cemail.value !== "" && cemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(cemail.value.trim())) {
      document.getElementById("cemailmessage").style.display = "block";
    } else {
      document.getElementById("cemailmessage").style.display = "block";
    }
  }
}

function creatorValidationOnkeyUpCname() {
  const cname = document.getElementById("cname");
  if (cname.value == "" || cname.value == undefined) {
    $("#cname").addClass("errorx");
    // document.getElementById("cnamemessage").style.display = "block";
  } else {
    $("#cname").removeClass("errorx");
    // document.getElementById("cnamemessage").style.display = "none";
  }
}
function creatorValidationOnkeyUpEmail() {
  const cemail = document.getElementById("cemail");
  if (cemail.value == "" || cemail.value == undefined) {
    $("#cemail").addClass("errorx");
    //document.getElementById("cvalidbemailmessage").style.display = "none";
    //document.getElementById("cemailmessage").style.display = "block";
  } else {
    $("#cemail").removeClass("errorx");
    // document.getElementById("cemailmessage").style.display = "none";
  }
  if (cemail.value !== "" && cemail.value !== undefined) {
    const regEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regEx.test(cemail.value.trim())) {
      checkIsemailValidCreator = true;
      $("#cemail").removeClass("errorx");
      // document.getElementById("cvalidbemailmessage").style.display = "none";
    } else {
      checkIsemailValidCreator = false;
      $("#cemail").addClass("errorx");

      // document.getElementById("cvalidbemailmessage").style.display = "block";
    }
  }
}
function creatorValidationOnkeyUpChannelName() {
  var channelsocialUrl = document.getElementsByName("channelname[]");
  if (
    channelsocialUrl[0].value == "" ||
    channelsocialUrl[0].value == undefined
  ) {
    $("#channelname").addClass("errorx");
    // document.getElementById("channelnamemessage").style.display = "block";
  } else {
    $("#channelname").removeClass("errorx");
    // document.getElementById("channelnamemessage").style.display = "none";
  }
}
function creatorValidationOnkeyUpService() {
  if (service.value == "" || service.value == undefined) {
    $("#service").addClass("errorx");
    // document.getElementById("servicemessage").style.display = "block";
  } else {
    $("#service").removeClass("errorx");
    // document.getElementById("servicemessage").style.display = "none";
  }
}
function creatorValidationOnkeyUpMessage() {
  if (cmessage.value == "" || cmessage.value == undefined) {
    $("#cmessage").addClass("errorx");
    // document.getElementById("cmessagemessage").style.display = "block";
  } else {
    $("#cmessage").removeClass("errorx");
    // document.getElementById("cmessagemessage").style.display = "none";
  }
}



