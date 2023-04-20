import styled from "styled-components";

const BillingWrapper = styled.div`
.billing{
    overflow-y:  scroll;
    height: 100vh;
}
.billing_informations{
  
}
.my_card{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem; 

}
.billing_informations_card{
    background-color: #F0F2F5;
    border-radius: 10px;

}
.deleteBtn{
    font-size: 15px;
}
.informations_transaction{
    padding: 10px 0 ;
    .faCaretUp{
        border-radius: 50%;
        border: 1px solid #4FA953;
        padding: 10px;
        width: 10px;
        height: 10px;
        color: #4FA953;
    }
    .faCaretDown{
        border-radius: 50%;
        border: 1px solid red;
        padding: 10px;
        width: 10px;
        height: 10px;
        color: red;
    }
    .faExclamation{
        border-radius: 50%;
        border: 1px solid #000;
        padding: 10px;
        width: 10px;
        height: 10px;
        /* color: #F0F2F5; */
    }
}
`
export default BillingWrapper;