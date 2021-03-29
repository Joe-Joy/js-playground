
function x(family_id,mailid,mobnumber) {
    return mobnumber != "" && mailid != "" && family_id != "" ? console.log("mobnumber & mailid & fm values updated")
         : mobnumber != "" && mailid != "" ? console.log("family ID empty")
         : mailid != "" && family_id != "" ? console.log("mobile id empty")
         : family_id != "" && mobnumber != "" ? console.log("mailId mob empty")
         : mobnumber != "" ? console.log("familyid mail values empty")
         : mailid != "" ? console.log("familyid mob values empty")
         : family_id != "" ? console.log("mob mail values empty")
         : console.log("nothing changed")
  }
  
  x("11","12","222");