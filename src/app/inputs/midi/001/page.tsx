import { ReactNode } from 'react';
import DialController001 from '@/components/midi-rig-001/DialController001';

interface MIDIDataControllerProps {
    children: ReactNode;
}
const MIDIDataController = ({children}: MIDIDataControllerProps) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default function Page() {
    return (
        <main>
            <MIDIDataController>
                MIDIDataController content
            </MIDIDataController>
            <h1>Dial Control with MIDI</h1>
            <DialController001 />
        </main>
    )
}
