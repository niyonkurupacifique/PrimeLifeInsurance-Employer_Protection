import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function EmployerProtection() {
  const [martualStatus, setMartualStatus] = useState("");
  const [martualStatusCheck, setMartualStatusCheck] = useState(false);
  const [salaryInPut, setSalaryInPut] = useState(null);
  const [numberOfChildren, setNumberOfChildren] = useState(0);
  const [numberOfDirectParent, setNumberOfDirectParent] = useState(0);
  const [numberOfDirectParentInLaw, setNumberOfDirectParentInLaw] = useState(0);
  const [sumInsuredRate, setSumInsuredRate] = useState(6);
  const [funel, setFuneral] = useState("Yes");
  const [savingStatus, setSavingStatus] = useState("Yes");
  const [insuredsharedToSpouse, setInsuredsharedToSpouse] = useState("Yes");
  const [premiumrate, setPremiumrate] = useState(3);
  const [disable, setDisable] = useState(true);
  const [riskPremiumValue, setRiskPremiumValue] = useState(0);
  const [premiumSavings, setPremiumSavings] = useState(0);
  const [riskPremiumAnuallyValue, setRiskPremiumAnuallyValue] = useState(0);
  const [savingsAnually, setSavingsAnually] = useState(0);
  const [deathsumAssuredHolder, setDeathsumAssuredHolder] = useState(0);
  const [permanentSumAssuredHolder, setPermanentSumAssuredHolder] = useState(0);
  const [lossOfRevenueSumAssuredHolder, setLossOfRevenueSumAssuredHolder] =
    useState(0);
  const [funeralFeesSumAssuredHolder, setFuneralFeesSumAssuredHolder] =
    useState(0);
  const [deathSpouseAssuredHolder, setDeathSpouseAssuredHolder] = useState(0);
  const [permanentSpouseAssuredHolder, setPermanentSpouseAssuredHolder] =
    useState(0);
  const [
    lossOfRevenueSpouseAssuredHolder,
    SetLossOfRevenueSpouseAssuredHolder,
  ] = useState(0);
  const [funeralFeesSpouseAssuredHolder, setFuneralFeesSpouseAssuredHolder] =
    useState(0);
    const [theme, setTheme] = useState("light");
    const handleChange = () => {
      setTheme(theme==="dark"?"light":"dark")
  
    };
    useEffect(()=>{
      if(theme==="dark")
      {
       document.documentElement.classList.add("dark")
      }
      else{
        document.documentElement.classList.remove("dark")
      }
    },[theme])
  const Getstatus = (e) => {
    console.log(e.target.value);
    setMartualStatus(e.target.value);
    setNumberOfChildren(0)
    if (e.target.value === "Single") {
      setMartualStatusCheck(true);
    } else {
      setMartualStatusCheck(false);
    }
  };
  const Getsalary = (e) => {
    console.log("salary is:", e.target.value);
    setSalaryInPut(e.target.value);
    setDisable(false);
    if (e.target.value < 300000) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  };
  const GetnumberOfChild = (e) => {
    console.log("number of children are:", e.target.value);
    setNumberOfChildren(e.target.value);
  };
  const GetNumberOfDirectParent = (e) => {
    console.log("number of direct parent are:", parseInt(e.target.value));
    setNumberOfDirectParent(parseInt(e.target.value));
  };
  const GetNumberOfDirectParentInLaw = (e) => {
    console.log(
      "number of direct parent in law are:",
      parseInt(e.target.value)
    );
    setNumberOfDirectParentInLaw(parseInt(e.target.value));
  };
  const GetSumInsuredRate = (e) => {
    console.log("sum insured rate are:", e.target.value);
    setSumInsuredRate(parseInt(e.target.value));
  };
  const GetFuneral = (e) => {
    console.log(e.target.value);
    setFuneral(e.target.value);
  };
  const GetSavings = (e) => {
    console.log(e.target.value);
    setSavingStatus(e.target.value);
  };
  const GetSumInsuredsharedToSpouse = (e) => {
    console.log(e.target.value);
    setInsuredsharedToSpouse(e.target.value);
  };
  const GetPremiumRate = (e) => {
    console.log("premium rate are:", e.target.value);
    setPremiumrate(e.target.value);
  };
  useEffect(() => {
    if (salaryInPut >= 300000) {
      let death = sumInsuredRate * salaryInPut;
      console.log("death amount is:", death);
      let permanentDisability = death;
      let lossOfRevenue = (death * 75) / 100;
      console.log("permanent disability is", permanentDisability);
      console.log("loss of revenue  is", lossOfRevenue);
      let funeralFess;
      let PmonthlyFuneralFees;
      let FuneralFeesSumAssuredHolder;
      let FuneralFeesSpouseAssuredHolder;
      if (funel === "No") {
        funeralFess = 0;
        PmonthlyFuneralFees = 0;
        FuneralFeesSumAssuredHolder = 0;
        FuneralFeesSpouseAssuredHolder = 0;
      } else {
        funeralFess = Math.min(1000000, salaryInPut * sumInsuredRate);
        PmonthlyFuneralFees = 2416;
        FuneralFeesSumAssuredHolder = Math.min(
          1000000,
          salaryInPut * sumInsuredRate
        );
        FuneralFeesSpouseAssuredHolder = Math.min(
          1000000,
          salaryInPut * sumInsuredRate
        );
      }
      setFuneralFeesSumAssuredHolder(FuneralFeesSumAssuredHolder);
      setFuneralFeesSpouseAssuredHolder(FuneralFeesSpouseAssuredHolder);
      let DeathsumAssuredHolder;
      let DeathSpouseAssuredHolder;

      if (insuredsharedToSpouse === "No") {
        DeathsumAssuredHolder = salaryInPut * sumInsuredRate;
        DeathSpouseAssuredHolder = 0;
        setDeathSpouseAssuredHolder(DeathSpouseAssuredHolder);
        setDeathsumAssuredHolder(DeathsumAssuredHolder);
        let PermanentSumAssuredHolder = salaryInPut * sumInsuredRate;
        let PermanentSpouseAssuredHolder = 0;
        setPermanentSpouseAssuredHolder(PermanentSpouseAssuredHolder);
        setPermanentSumAssuredHolder(PermanentSumAssuredHolder);
      } else {
        DeathsumAssuredHolder = (salaryInPut * sumInsuredRate * 60) / 100;
        DeathSpouseAssuredHolder = (salaryInPut * sumInsuredRate * 40) / 100;
        setDeathSpouseAssuredHolder(DeathSpouseAssuredHolder);
        setDeathsumAssuredHolder(DeathsumAssuredHolder);
        let PermanentSumAssuredHolder =
          (salaryInPut * sumInsuredRate * 60) / 100;
        let PermanentSpouseAssuredHolder =
          (salaryInPut * sumInsuredRate * 40) / 100;
        setPermanentSpouseAssuredHolder(PermanentSpouseAssuredHolder);
        setPermanentSumAssuredHolder(PermanentSumAssuredHolder);
      }

      let LossOfRevenueSumAssuredHolder = (DeathsumAssuredHolder * 75) / 100;
      setLossOfRevenueSumAssuredHolder(LossOfRevenueSumAssuredHolder);
      SetLossOfRevenueSpouseAssuredHolder(0);

      console.log("death shared are :", DeathsumAssuredHolder);

      console.log("funeral fees is:", funeralFess);
      console.log("Pmonthly funeral fees is:", PmonthlyFuneralFees);
      let PmonthlyDeath =
        (1850 + (death * 4.89477683361112) / 12 / 1000) / 0.85;
      let PmonthlyDeathValue = Math.ceil(PmonthlyDeath);
      let PannualDeath = (PmonthlyDeath * 12) / 1.04 - 1000;
      console.log("PannualDeath", PmonthlyDeath);
      console.log("premium monthly Death:", PmonthlyDeathValue);
      let PmonthlyPermanentDisability = (permanentDisability * 1.2) / 1000 / 12;
      let PannualPermanentDisability =
        (PmonthlyPermanentDisability * 12) / 1.04;
      console.log(
        "Premium monthly Permanent Disability is:",
        PmonthlyPermanentDisability
      );
      let PmonthlyLossOfRevenue = (lossOfRevenue * 0.001) / 12;
      let PannualLossOfRevenue = (PmonthlyLossOfRevenue * 12) / 1.04;
      let PannualFuneralFess = (PmonthlyFuneralFees * 12) / 1.04;
      let PmonthlyLossOfRevenueValue = Math.ceil(PmonthlyLossOfRevenue);
      console.log(
        "Premium monthly loss of revenue is:",
        PmonthlyLossOfRevenueValue
      );

      let RiskPremium;
      let RiskPremiumAnnually;
      let additionalAmount;
      let additionalAmountAnnually;
      if(martualStatus === "Other")
      {
        setNumberOfDirectParentInLaw(0)
        if (numberOfChildren > 4 && numberOfDirectParent != 0) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually +
            2500 * 12;
        }
      }
      else {
        if (
          numberOfChildren > 4 &&
          numberOfDirectParent != 0 &&
          numberOfDirectParentInLaw != 0
        ) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount +
            5000;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually +
            2500 * 12 +
            2500 * 12;
        } else if (numberOfChildren > 4 && numberOfDirectParent != 0) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually +
            2500 * 12;
        } else if (numberOfChildren > 4 && numberOfDirectParentInLaw != 0) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually +
            2500 * 12;
        } else if (numberOfChildren > 4) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          console.log("number of children are:", additionalChild);
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually;
          console.log(
            "p anuaal funeral fees issssssss",
            additionalAmountAnnually
          );
        } else if (
          numberOfDirectParent != 0 &&
          numberOfDirectParentInLaw != 0
        ) {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            5000;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            2500 * 12 +
            2500 * 12;
        } else if (numberOfDirectParent != 0) {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            2500 * 12;
        } else if (numberOfDirectParentInLaw != 0) {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            2500 * 12;
        } else {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess;
        }
      }
      
      if (martualStatus === "Single") {
        RiskPremium =
          PmonthlyDeath +
          PmonthlyPermanentDisability +
          PmonthlyLossOfRevenue +
          PmonthlyFuneralFees;
        RiskPremiumAnnually =
          PannualDeath +
          PannualPermanentDisability +
          PannualLossOfRevenue +
          PannualFuneralFess;
      }  else {
        if (
          numberOfChildren > 4 &&
          numberOfDirectParent != 0 &&
          numberOfDirectParentInLaw != 0
        ) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount +
            5000;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually +
            2500 * 12 +
            2500 * 12;
        } else if (numberOfChildren > 4 && numberOfDirectParent != 0) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually +
            2500 * 12;
        } else if (numberOfChildren > 4 && numberOfDirectParentInLaw != 0) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually +
            2500 * 12;
        } else if (numberOfChildren > 4) {
          const additionalChild = numberOfChildren - 4;
          console.log("number of children are:", additionalChild);
          additionalAmount = additionalChild * 500;
          console.log("number of children are:", additionalChild);
          additionalAmountAnnually = additionalChild * 6000;
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            additionalAmount;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            additionalAmountAnnually;
          console.log(
            "p anuaal funeral fees issssssss",
            additionalAmountAnnually
          );
        } else if (
          numberOfDirectParent != 0 &&
          numberOfDirectParentInLaw != 0
        ) {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            5000;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            2500 * 12 +
            2500 * 12;
        } else if (numberOfDirectParent != 0) {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            2500 * 12;
        } else if (numberOfDirectParentInLaw != 0) {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees +
            2500;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess +
            2500 * 12;
        } else {
          RiskPremium =
            PmonthlyDeath +
            PmonthlyPermanentDisability +
            PmonthlyLossOfRevenue +
            PmonthlyFuneralFees;
          RiskPremiumAnnually =
            PannualDeath +
            PannualPermanentDisability +
            PannualLossOfRevenue +
            PannualFuneralFess;
        }
      }
      let RiskPremiumValue = Math.floor(RiskPremium);
      let RiskPremiumAnnuallyValue = Math.round(RiskPremiumAnnually);
      console.log("risk premium value are:", RiskPremiumValue);
      setRiskPremiumValue(RiskPremiumValue);
      setRiskPremiumAnuallyValue(RiskPremiumAnnuallyValue);
      let savings;
      let savingsAnually;
      if (savingStatus === "Yes") {
        if(martualStatus === "Other")
        {

        }
        if (martualStatus === "Single") {
          savings = (salaryInPut * premiumrate) / 100 - RiskPremiumValue;
          savingsAnually =
            ((salaryInPut * premiumrate) / 100) * 12 - RiskPremiumAnnuallyValue;
        }  else {
          if (
            numberOfChildren > 4 &&
            numberOfDirectParent != 0 &&
            numberOfDirectParentInLaw != 0
          ) {
            savings =
              (salaryInPut * premiumrate) / 100 -
              (RiskPremiumValue - additionalAmount - 5000);
            const additionalChild = numberOfChildren - 4;
            console.log("number of children are:", additionalChild);
            additionalAmount = additionalChild * 500;
            additionalAmountAnnually = additionalChild * 6000;
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              (RiskPremiumAnnuallyValue -
                additionalAmountAnnually -
                2500 * 12 -
                2500 * 12);
            console.log("aaaaaaaa:", salaryInPut);
          } else if (numberOfChildren > 4 && numberOfDirectParent != 0) {
            savings =
              (salaryInPut * premiumrate) / 100 -
              (RiskPremiumValue - additionalAmount - 2500);
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              (RiskPremiumAnnuallyValue - additionalAmountAnnually - 2500 * 12);
          } else if (numberOfChildren > 4 && numberOfDirectParentInLaw != 0) {
            savings =
              (salaryInPut * premiumrate) / 100 -
              (RiskPremiumValue - additionalAmount - 2500);
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              (RiskPremiumAnnuallyValue - additionalAmountAnnually - 2500 * 12);
          } else if (numberOfChildren > 4) {
            savings =
              (salaryInPut * premiumrate) / 100 -
              (RiskPremiumValue - additionalAmount);
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              (RiskPremiumAnnuallyValue - additionalAmountAnnually);
          } else if (
            numberOfDirectParent != 0 &&
            numberOfDirectParentInLaw != 0
          ) {
            savings =
              (salaryInPut * premiumrate) / 100 - (RiskPremiumValue - 5000);
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              (RiskPremiumAnnuallyValue - 2500 * 12 - 2500 * 12);
          } else if (numberOfDirectParent != 0) {
            savings =
              (salaryInPut * premiumrate) / 100 - (RiskPremiumValue - 2500);
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              (RiskPremiumAnnuallyValue - 2500 * 12);
          } else if (numberOfDirectParentInLaw != 0) {
            savings =
              (salaryInPut * premiumrate) / 100 - (RiskPremiumValue - 2500);
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              (RiskPremiumAnnuallyValue - 2500 * 12);
          } else {
            savings = (salaryInPut * premiumrate) / 100 - RiskPremiumValue;
            savingsAnually =
              ((salaryInPut * premiumrate) / 100) * 12 -
              RiskPremiumAnnuallyValue;
          }
        }
      } else {
        savings = 0;
        savingsAnually = 0;
      }

      console.log("savings are:", Math.floor(savings));
      setPremiumSavings(Math.floor(savings));
      setSavingsAnually(Math.round(savingsAnually));
    } else {
      setRiskPremiumValue(0);
      setRiskPremiumAnuallyValue(0);
      setPremiumSavings(0);
      setSavingsAnually(0);
    }

  }, [
    salaryInPut,
    insuredsharedToSpouse,
    sumInsuredRate,
    funel,
    savingStatus,
    premiumrate,
    numberOfChildren,
    numberOfDirectParent,
    numberOfDirectParentInLaw,
    martualStatus,
  ]);


  return (
    <div   className=" mb-20 mt-5 dark:bg-darkModeColor ">
      <div className=" ml-10 mt-5">
        <img
          src="https://prime.rw/public/themes//assets/img/svg/nav-logo-icon.svg"
          alt=""
        />
       <div className="flex justify-end mr-64">
      {theme==="dark" ? <div className="text-white font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing">dark mode (
        <ToggleOnIcon onClick={handleChange} fontSize="large" color="white" />
      )</div> :<div className="font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing text-black">light mode (
        <ToggleOffIcon onClick={handleChange} fontSize="large" color="white" />
      )</div>}
    </div>
      
      </div>
      {salaryInPut >= 300000 || salaryInPut == null ? (
        <div className="  ml-3 font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing text-mycolor">
          EMPLOYEE PROTECTION INSURANCE QUOTATION
        </div>
      ) : (
        <div className="  text-red-600  ml-3 font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing ">
          <div className=" flex justify-center">
            <div className=" animate-bounce large">
              <WarningAmberIcon></WarningAmberIcon>
            </div>
            <div>Salary Requirement: Minimum of 300,000 RWF</div>
          </div>
        </div>
      )}
      <div className=" font-myfontfamily text-tilemyfontsizeeee  font-myfontweightttt tracking-myletterspacing  bg-red-500  text-white flex justify-center"></div>

      {/* <div className="underline underline-offset-4 flex  justify-start mx-auto sm:mr-80 font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing text-black sm:text-center">
  Premium Payment Frequency
</div> */}

      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 8 }}
        style={{ marginTop: "8px", marginLeft: "2px", marginRight: "2px" }}
        item
        justifyContent="center"
        xl={12}
        lg={12}
        spacing={10}
        alignItems="center"
      >
        <Grid
          item
          xl={6}
          lg={6}
          style={{ maxHeight: "438px", maxWidth: "500px" }}
        >
          <div className=" dark:text-white underline underline-offset-4  mb-3  flex justify-center  mx-auto  font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing text-black ">
            Input
          </div>

          <div style={{ maxHeight: "325px", overflow: "auto" }}>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-4 py-3">Field</th>
                  <th className="px-4 py-3">Value</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:text-white dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Marital status
                  </td>
                  <td className="px-4 py-3">
                    <select 
                      className="w-full dark:bg-darkModeColor"
                      defaultValue={""}
                      disabled={disable}
                      onChange={Getstatus}
                    >
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                      <option value="Other">Other</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                <tr className=" dark:text-white border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Salary per month
                  </td>
                  <td className="px-4 py-3">
                    <input
                      className=" w-32 dark:bg-darkModeColor"
                      type="number"
                      onChange={Getsalary}
                    />
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                {martualStatus != "Single" && (
                  <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Number of Childreen
                    </td>
                    <td className="px-4 py-3">
                      <input
                        className=" w-32 dark:bg-darkModeColor"
                        type="number"
                        disabled={disable}
                        onChange={GetnumberOfChild}
                      />
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </td>
                  </tr>
                )}
                <tr className="dark:text-white bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Number of Direct Parent
                  </td>
                  <td className="px-4 py-3">
                    <select
                      className="w-full dark:bg-darkModeColor"
                      disabled={disable}
                      onChange={GetNumberOfDirectParent}
                    >
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                {martualStatus != "Single" && martualStatus != "Other" && (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Number of Direct Parent in law
                    </td>
                    <td className="px-4 py-3">
                      <select
                        className="w-full dark:bg-darkModeColor"
                        disabled={disable}
                        onChange={GetNumberOfDirectParentInLaw}
                      >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </td>
                  </tr>
                )}

                <tr className="bg-white dark:text-white  border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Funeral
                  </td>
                  <td className="px-4 py-3">
                    <select
                      className="w-full dark:bg-darkModeColor"
                      disabled={disable}
                      onChange={GetFuneral}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                <tr className="bg-white dark:text-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Savings
                  </td>
                  <td className="px-4 py-3">
                    <select
                      className="w-full dark:bg-darkModeColor"
                      disabled={disable}
                      onChange={GetSavings}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                {martualStatus != "Single" && (
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 dark:text-white">
                    <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      Sum Insured shared to spouse
                    </td>
                    <td className="px-4 py-3">
                      <select
                        className="w-full dark:bg-darkModeColor"
                        disabled={disable}
                        onChange={GetSumInsuredsharedToSpouse}
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href="#"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      ></a>
                    </td>
                  </tr>
                )}

                <tr className="  bg-white dark:text-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-4 py-3 dark:bg-gray-900 dark:border-gray-700 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Sum Insured rate
                  </td>
                  <td className="px-4 py-3">
                    <select
                      className="w-full dark:bg-darkModeColor"
                      disabled={disable}
                      onChange={GetSumInsuredRate}
                    >
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="24">24</option>
                      <option value="15">15</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                <tr className=" bg-white dark:text-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-4 py-3 dark:bg-gray-900 dark:border-gray-700 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Premium rate
                  </td>
                  <td className="px-4 py-3">
                    <select
                      className="w-full dark:bg-darkModeColor"
                      disabled={disable}
                      onChange={GetPremiumRate}
                    >
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Grid>
        <Grid xl={6}  lg={6} item style={{ maxWidth: "500px" }}>
          <div className="underline dark:text-white underline-offset-4  mb-3  flex justify-center  mx-auto  font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing text-black ">
            Premium Payment Frequency
          </div>
          <table className=" dark:bg-black w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3">
                  Monthly
                </th>
                <th scope="col" className="px-6 py-3">
                  Annual
                </th>
              </tr>
            </thead>
            <tbody className="space-y-11">
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Risk Premium
                </td>
                <td className="px-6">{riskPremiumValue}</td>
                <td className="px-6">{riskPremiumAnuallyValue}</td>
              </tr>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Saving Premium
                </td>
                <td className="px-6 py-4">{premiumSavings}</td>
                <td className="px-6 py-4">{savingsAnually}</td>
              </tr>
              <tr className=" dark:text-white bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <td className=" dark:text-white px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:textwhite">
                  Total Premium
                </td>
                <td className="px-6 py-4">
                  {riskPremiumValue + premiumSavings}
                </td>
                <td className="px-6 py-4">
                  {riskPremiumAnuallyValue + savingsAnually}
                </td>
              </tr>
            </tbody>
          </table>
        </Grid>
      </Grid>

      <div className=" dark:text-white underline underline-offset-4  mb-3  flex justify-center  mx-auto  font-myfontfamily text-myfontsize font-myfontweight tracking-myletterspacing text-black ">
        Covers
      </div>
      <div className=" dark:bg-black mb-10   flex justify-center mx-56 relative  sm:rounded-lg  shadow-lg shadow-black/80 ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Covers
              </th>
              <th scope="col" className="px-6 py-3">
                Sum assured<br></br>
                Polcy holder
              </th>
              <th scope="col" className="px-6 py-3">
                Spouse assured<br></br>
                Polcy holder
              </th>
            </tr>
          </thead>
          <tbody className="space-y-11">
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Death
              </td>
              <td className="px-6">{deathsumAssuredHolder}</td>
              <td className="px-6">{deathSpouseAssuredHolder}</td>
            </tr>
            <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Permanent Disability
              </td>
              <td className="px-6 py-4">{permanentSumAssuredHolder}</td>
              <td className="px-6 py-4">{permanentSpouseAssuredHolder}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="dark:text-white px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:textwhite">
                Loss of Revenue
              </td>
              <td className="px-6 py-4">{lossOfRevenueSumAssuredHolder}</td>
              <td className="px-6 py-4">{lossOfRevenueSpouseAssuredHolder}</td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
              <td className="  dark:text-white px-6 py-10 font-medium text-gray-900 whitespace-nowrap dark:textwhite">
                Funeral Fees
              </td>
              <td className="px-6 py-4">{funeralFeesSumAssuredHolder}</td>
              <td className="px-6 py-4">{funeralFeesSpouseAssuredHolder}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default EmployerProtection;
