const loopCripto = setInterval(refreshCripto,500)
const loopDescripto = setInterval(refreshDescripto,1000)
const msmC = document.getElementById("msmCripto");

function refreshCripto(){
const InpASerCripto = document.getElementById("msmASerCripto").value;
const Criptografar = InpASerCripto.toUpperCase()
const channel = document.getElementById("channel").value;
  
  
const AR = Criptografar.replaceAll("A",0*channel)
const BR = AR.replaceAll("B",1*channel)
const CR = BR.replaceAll("C",2*channel)
const DR = CR.replaceAll("D",3*channel)
const ER = DR.replaceAll("E",4*channel)
const FR = ER.replaceAll("F",5*channel)
const GR = FR.replaceAll("G",6*channel)
const HR = GR.replaceAll("H",7*channel)
const IR = HR.replaceAll("I",8*channel)
const JR = IR.replaceAll("J",9*channel)
const KR = JR.replaceAll("K",1*channel+"x")
const LR = KR.replaceAll("L",2*channel+"x")
const MR = LR.replaceAll("M",3*channel+"x")
const NR = MR.replaceAll("N",4*channel+"x")
const OR = NR.replaceAll("O",5*channel+"x")
const PR = OR.replaceAll("P",6*channel+"x")
const QR = PR.replaceAll("Q",7*channel+"x")
const RR = QR.replaceAll("R",8*channel+"x")
const SR = RR.replaceAll("S",9*channel+"x")
const TR = SR.replaceAll("T",1*channel+"y")
const UR = TR.replaceAll("U",2*channel+"y")
const VR = UR.replaceAll("V",3*channel+"y")
const WR = VR.replaceAll("W",4*channel+"y")
const XR = WR.replaceAll("X",5*channel+"y")
const YR = XR.replaceAll("Y",6*channel+"y")
const ZR = YR.replaceAll("Z",7*channel+"y")
const ReplacedItems = ZR

msmC.innerHTML = ReplacedItems
   
}//Fim do criptografo
function copyCripto(){
  navigator.clipboard.writeText(msmC.innerText)
  alert("Mensagem: "+msmC.innerText + " Copiada!")
}

function refreshDescripto(){
const InpASerDescripto = document.getElementById("msmASerDescripto").value;
const Criptografar2 = InpASerDescripto.toUpperCase();
const channel = document.getElementById("channel").value;
  
let KD = Criptografar2.replaceAll(1+"X","K")
let LD = KD.replaceAll(2*channel+"X","L")
let MD = LD.replaceAll(3*channel+"X","M")
let ND = MD.replaceAll(4*channel+"X","N")
let OD = ND.replaceAll(5*channel+"X","O")
let PD = OD.replaceAll(6*channel+"X","P")
let QD = PD.replaceAll(7*channel+"X","Q")
let RD = QD.replaceAll(8*channel+"X","R")
let SD = RD.replaceAll(9*channel+"X","S")
let TD = SD.replaceAll(1*channel+"Y","T")
let UD = TD.replaceAll(2*channel+"Y","U")
let VD = UD.replaceAll(3*channel+"Y","V")
let WD = VD.replaceAll(4*channel+"Y","W")
let XD = WD.replaceAll(5*channel+"Y","X")
let YD = XD.replaceAll(6*channel+"Y","Y")
let ZD = YD.replaceAll(7*channel+"Y","Z")
let AD = ZD.replaceAll(0*channel,"A")
let BD = AD.replaceAll(1*channel,"B")
let CD = BD.replaceAll(2*channel,"C")
let DD = CD.replaceAll(3*channel,"D")
let ED = DD.replaceAll(4*channel,"E")
let FD = ED.replaceAll(5*channel,"F")
let GD = FD.replaceAll(6*channel,"G")
let HD = GD.replaceAll(7*channel,"H")
let ID = HD.replaceAll(8*channel,"I")
let JD = ID.replaceAll(9*channel,"J")
let ReplacedItems2 = JD

let msmD3 = document.getElementById("msmDescripto");

msmD3.innerHTML = ReplacedItems2
}