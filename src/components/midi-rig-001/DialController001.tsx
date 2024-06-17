
// "use client";
// import React, { useEffect, useState } from 'react';
// import Slider from './Slider001'; // Import your Slider component

// const DialController001: React.FC = () => {
//   const [dialValues, setDialValues] = useState<number[]>(new Array(8).fill(0));

//   useEffect(() => {
//     const handleMIDIMessage = (message: WebMidi.MIDIMessageEvent) => {
//       const [status, controller, value] = message.data;

//       // Check if the message is a Control Change message for the relevant dials
//       if (status === 176 && controller >= 70 && controller <= 77) {
//         const dialIndex = controller - 70;
//         setDialValues(prevValues => {
//           const newValues = [...prevValues];
//           newValues[dialIndex] = value;
//           return newValues;
//         });
//       }
//     };

//     const requestMIDIAccess = async () => {
//       try {
//         const midiAccess = await navigator.requestMIDIAccess();
//         midiAccess.inputs.forEach(input => {
//           input.onmidimessage = handleMIDIMessage;
//         });
//       } catch (error) {
//         console.error('MIDI access error:', error);
//       }
//     };

//     requestMIDIAccess();

//     return () => {
//       // Clean up MIDI event handlers if necessary
//     };
//   }, []);

//   const handleSliderChange = (index: number, value: number) => {
//     setDialValues(prevValues => {
//       const newValues = [...prevValues];
//       newValues[index] = value;
//       return newValues;
//     });

//     // Optionally send MIDI message back to the controller or perform other actions
//   };

//   return (
//     <div className="slider-container">
//       {dialValues.map((value, index) => (
//         <Slider
//           key={index}
//           value={value}
//           onChange={(newValue) => handleSliderChange(index, newValue)}
//         />
//       ))}
//     </div>
//   );
// };

// export default DialController001;

"use client";
import React, { useEffect, useState } from 'react';
import Slider from './Slider001'; // Import your Slider component

const DialController001: React.FC = () => {
  const [dialValues, setDialValues] = useState<number[]>(new Array(8).fill(0));

  useEffect(() => {
    const getMIDIMessage = (message: WebMidi.MIDIMessageEvent) => {
      const [status, controller, value] = message.data;

      // Check if the message is a Control Change message for the relevant dials
      if (status === 176 && controller >= 70 && controller <= 77) {
        const dialIndex = controller - 70;
        setDialValues(prevValues => {
          const newValues = [...prevValues];
          newValues[dialIndex] = value;
          return newValues;
        });
      }
    };

    const onMIDISuccess = (midiAccess: WebMidi.MIDIAccess) => {
      for (const input of midiAccess.inputs.values()) {
        console.log('Found an input with id %s and name %s', input.id, input.name);
        input.onmidimessage = getMIDIMessage;

        // Optionally, send Control Change messages to initialize state
        for (let controller = 70; controller <= 77; controller++) {
          const status = 176; // Control Change message on Channel 1
          input.send(new Uint8Array([status, controller, 0]));
        }
      }
    };

    const requestMIDIAccess = async () => {
      try {
        const midiAccess = await navigator.requestMIDIAccess();
        onMIDISuccess(midiAccess);
      } catch (error) {
        console.error('MIDI access error:', error);
      }
    };

    requestMIDIAccess();

    return () => {
      navigator.requestMIDIAccess().then((midiAccess) => {
        for (const input of midiAccess.inputs.values()) {
          input.onmidimessage = null; // Clean up MIDI event handlers
        }
      });
    };
  }, []);

  const handleSliderChange = (index: number, value: number) => {
    setDialValues(prevValues => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });

    // Optionally send MIDI message back to the controller or perform other actions
  };

  return (
    <div className="slider-container">
      {dialValues.map((value, index) => (
        <Slider
          key={index}
          value={value}
          onChange={(newValue) => handleSliderChange(index, newValue)}
        />
      ))}
    </div>
  );
};

export default DialController001;