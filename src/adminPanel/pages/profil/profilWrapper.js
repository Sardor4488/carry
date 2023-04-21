import styled from "styled-components";
import img_profile_bg from "./bg-profile.af1219a742e09fc7b612.jpeg"
const ProfilWrapper = styled.div`
.profil{
    overflow-y:  scroll;
    height: 100vh;
}
.my_card{
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem; 
    width: 90%;
    margin: auto;
    /* height: 300px; */
}
.stil_bg_img{
    padding-top: 230px;
    background-image: url(${img_profile_bg}) ;
    background-size: cover;
    background-position: center;
    width: 100%;
    margin: auto;
    border-radius:10px ;
    height: 300px !important;
}
.img_user{
    width: 70px;
    height: 70px;
    border-radius: 50%;

}
.profil_informations{
    border-right: 1px solid rgb(122, 122, 122);
}
`
export default ProfilWrapper;