import React from 'react';
import HexColor from './components/HexColor/index';
import RGBColor from './components/RGBColor';
import './app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorRGB: {
        r: '',
        g: '',
        b: '',
      },
      colorHEX: '',
    };
  }

  componentDidUpdate() {
    document.body.style.backgroundColor =
      this.state.colorHEX !== '' && this.state.colorHEX.length === 6
        ? `#${this.state.colorHEX}`
        : '#ffffff';
  }

  updateColorRGB(event, color) {
    let value = event.target.value;
    let rgb = Object.assign({}, this.state.colorRGB);
    if (value >= 0 && value <= 255) {
      if (color === 'r') {
        rgb.r = value;
        this.setState({
          colorRGB: rgb,
        });
      } else if (color === 'g') {
        rgb.g = value;
        this.setState({
          colorRGB: rgb,
        });
      } else {
        rgb.b = value;
        this.setState({
          colorRGB: rgb,
        });
      }
    }
    if (rgb.r !== '' && rgb.g !== '' && rgb.b !== '') {
      this.handleRGBToHex(rgb);
    } else {
      this.setState({
        colorHEX: '',
      });
    }
  }

  updateColorHEX(event) {
    let hexRE = /[0-9A-Fa-f]+$/g;
    let hexVal = event.target.value;
    if (hexRE.test(hexVal) || hexVal === '') {
      this.setState({
        colorHEX: hexVal,
      });
      if (hexVal.length === 6) {
        this.handleHexToRGB(hexVal);
      } else {
        this.setState({
          colorRGB: {
            r: '',
            g: '',
            b: '',
          },
        });
      }
    }
  }

  handleHexToRGB(hex) {
    let rgb = this.fromHexToRGB(hex);
    this.setState({
      colorRGB: {
        r: rgb[0],
        g: rgb[1],
        b: rgb[2],
      },
    });
  }

  handleRGBToHex(rgb) {
    let hex = this.fromRGBToHex(rgb);
    this.setState({
      colorHEX: hex,
    });
  }

  fromHexToRGB(hex) {
    var rgb = [];
    for (let i = 0; i < 6; i += 2) {
      rgb.push(parseInt(hex[i] + hex[i + 1], 16));
    }
    return rgb;
  }

  fromRGBToHex(rgb) {
    let hex = '';
    hex += parseInt(rgb.r).toString(16).toUpperCase().padStart(2, '0');
    hex += parseInt(rgb.g).toString(16).toUpperCase().padStart(2, '0');
    hex += parseInt(rgb.b).toString(16).toUpperCase().padStart(2, '0');
    return hex;
  }

  handleReset() {
    this.setState({
      colorHEX: '',
      colorRGB: {
        r: '',
        g: '',
        b: '',
      },
    });
  }

  handleRandomColor() {
    let rgb = Object.assign({}, this.state.colorRGB);
    rgb.r = Math.floor(Math.random() * (255 - 0 + 1));
    rgb.g = Math.floor(Math.random() * (255 - 0 + 1));
    rgb.b = Math.floor(Math.random() * (255 - 0 + 1));

    this.handleRGBToHex(rgb);
    this.setState({
      colorRGB: rgb,
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <HexColor
            colorHEX={this.state.colorHEX}
            onChange={(e, color) => {
              this.updateColorHEX(e, color);
            }}
          />
          <RGBColor
            colorRGB={this.state.colorRGB}
            onChange={(e, color) => {
              this.updateColorRGB(e, color);
            }}
          />
          <p>
            <button className="button" onClick={() => this.handleReset()}>
              Reset
            </button>
          </p>
          <p>
            <button className="button" onClick={() => this.handleRandomColor()}>
              Random color
            </button>
          </p>
        </div>
      </>
    );
  }
}

export default App;
