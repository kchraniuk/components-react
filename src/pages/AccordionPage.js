
import Accordion from "../components/Accordion";
function AccordionPage () {

    const items = [
        {
            id: '1w3ef',
            label: 'Lorem ipsum dolor',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta rutrum lorem, at auctor purus consequat ac.',
        },
        {
            id: 'ef1df',
            label: 'Quisque varius venenatis dolor et gravida',
            content: 'Nam bibendum, dolor sed ullamcorper scelerisque, dolor tortor elementum sem, a molestie eros nibh at eros. Fusce erat urna, fringilla ut laoreet id, iaculis at sem.',
        },
        {
            id: 'cf3dd',
            label: 'In eleifend mauris tortor',
            content: 'Nullam a nulla nec odio consequat eleifend sit amet at justo. Orci varius natoque penatibus et magnis dis parturient montes.',
        },
    ];

    return (<div>
        <Accordion items={items} />
    </div>);
}

export default AccordionPage;