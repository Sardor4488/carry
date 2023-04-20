import styled from "styled-components";

const DashboardWrapper = styled.div`
.dashboard{
    overflow-y:  scroll;
    height: 100vh;
}
.imformation_card{
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem; 
    div{
        padding-bottom: 7px;
    }
    .information_icon{
        background-color: #3445A1;
        color: #fff;
        padding: 10px;
        font-size: 27px;
        border-radius: 10px;
    }
    .users_icon{
        background-color: #36363C;
    }
    .person_icon{
        background-color: #E4316F;
    }
    .house_icon{
        background-color: #4FA953;
    }
    .growth_number {
        font-weight: bold;
    }
}
`
export default DashboardWrapper