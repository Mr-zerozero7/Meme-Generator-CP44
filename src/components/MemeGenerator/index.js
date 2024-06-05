import {Component} from 'react'

import {
  MainContainer,
  FormContainer,
  Heading,
  CustomLabel,
  CustomInput,
  SelectOption,
  ChooseOption,
  CategoryContainer,
  CustomButton,
  OutputContainer,
  CustomText,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlCustomInput: '',
    topTextCustomInput: '',
    bottomTextCustomInput: '',
    selectedFontCustomInput: fontSizesOptionsList[0].optionId,
    backgroundImage: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  handleImageChange = event => {
    this.setState({imageUrlCustomInput: event.target.value})
  }

  handleTopText = event => {
    this.setState({topTextCustomInput: event.target.value})
  }

  handleBottomText = event => {
    this.setState({bottomTextCustomInput: event.target.value})
  }

  handleFontSize = event => {
    this.setState({selectedFontCustomInput: event.target.value})
  }

  onGenerateBtn = event => {
    event.preventDefault()
    const {
      imageUrlCustomInput,
      topTextCustomInput,
      bottomTextCustomInput,
      selectedFontCustomInput,
      fontSize,
    } = this.state
    this.setState({
      backgroundImage: imageUrlCustomInput,
      topText: topTextCustomInput,
      bottomText: bottomTextCustomInput,
      fontSize: selectedFontCustomInput,
    })
    console.log(fontSize)
  }

  render() {
    const {
      backgroundImage,
      topText,
      bottomText,
      fontSize,
      imageUrlCustomInput,
      topTextCustomInput,
      bottomTextCustomInput,
      selectedFontCustomInput,
    } = this.state
    return (
      <MainContainer>
        <FormContainer onSubmit={this.onGenerateBtn}>
          <Heading>Meme Generator</Heading>
          <CategoryContainer>
            <CustomLabel htmlFor="backgroundInput">Image URL</CustomLabel>
            <br />
            <CustomInput
              id="backgroundInput"
              type="text"
              placeholder="Enter the Image URL"
              value={imageUrlCustomInput}
              onChange={this.handleImageChange}
            />
          </CategoryContainer>
          <CategoryContainer>
            <CustomLabel htmlFor="inputTopText">Top Text</CustomLabel>
            <br />
            <CustomInput
              id="inputTopText"
              type="text"
              placeholder="Enter the Top Text"
              value={topTextCustomInput}
              onChange={this.handleTopText}
            />
          </CategoryContainer>
          <CategoryContainer>
            <CustomLabel htmlFor="inputBottomText">Bottom Text</CustomLabel>
            <br />
            <CustomInput
              id="inputBottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              value={bottomTextCustomInput}
              onChange={this.handleBottomText}
            />
          </CategoryContainer>
          <CategoryContainer>
            <CustomLabel htmlFor="inputFont">Font Size</CustomLabel>
            <br />
            <SelectOption
              id="inputFont"
              onChange={this.handleFontSize}
              value={selectedFontCustomInput}
            >
              {fontSizesOptionsList.map(eachItem => (
                <ChooseOption key={eachItem.optionId} value={eachItem.optionId}>
                  {eachItem.displayText}
                </ChooseOption>
              ))}
            </SelectOption>
          </CategoryContainer>
          <CustomButton type="submit">Generate</CustomButton>
        </FormContainer>
        <OutputContainer backgroundImage={backgroundImage} data-testid="meme">
          <CustomText fontSize={fontSize}>{topText}</CustomText>
          <CustomText fontSize={fontSize}>{bottomText}</CustomText>
        </OutputContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
