// Style your components here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  height: 100vh;
  box-sizing: border-box;
  font-family: 'Open Sans';
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`
export const Heading = styled.h1`
  color: #35469c;
`
export const FormContainer = styled.form`
  width: 500px;
  margin-left: 40px;
  margin-bottom: 40px;
`

export const CategoryContainer = styled.div``

export const CustomLabel = styled.label`
  color: #5a7184;
  font-size: 20px;
`
export const CustomInput = styled.input`
  padding: 10px;
  border-radius: 10px;
  width: 80%;
  border: solid 1px #7e858e;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 15px;
`

export const SelectOption = styled.select`
  width: 80%;
  padding: 10px;
  font-size: 18px;
  border-radius: 10px;
  font-weight: 600;
  margin-top: 5px;
`

export const ChooseOption = styled.option`
  padding: 10px;
`
export const CustomButton = styled.button`
  padding: 12px;
  font-size: 18px;
  outline: none;
  border: none;
  font-weight: 600;
  color: #ffffff;
  background-color: #0b69ff;
  cursor: pointer;
  border-radius: 10px;
  margin-top: 20px;
  width: 150px;
`

export const OutputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  height: 90%;
  border-radius: 10px;
  align-items: center;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
`

export const CustomText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize}px;
  font-family: 'Open Sans';
`
