import React from 'react'
import {
    CustomSelect,
    CustomSelectOption,
    Div,
    Group,
    Button
} from '@vkontakte/vkui'
import axios from 'axios';
import { getTowns } from '../../api/Cities';



const CustomSearchAlgoSelect = ({send}) => {
    const [value, setValue] = React.useState('');
    const [query, setQuery] = React.useState('');

    const [cities, setCities] = React.useState([
    ]);

    React.useEffect(() => {
        async function getData(){
            const t = await getTowns()
            console.log(t)
            setCities(t)
        }
        getData()
    }, [])

    const customSearchOptions = () => {
        const options = [...cities];
        if (query.length > 0 && !options.find((town) => town.label === query)) {
            options.unshift({
                label: `Добавить город ${query}`,
                value: '0',
            });
            ///axios
        }
        return options;
    };

    const onCustomSearchChange = (e) => {
        if (e.target.value === '0') {
            setCities([...cities, { label: query, value: query }]);
            setValue(query);
            console.log(query)
           // addTowns(query)
        } else {
            setValue(e.target.value);
            console.log(e.target.value)
        }
        setQuery('');
    };
    const onCustomSearchInputChange = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value);
    };

    const customSearchFilter = (value, option) =>
        option.label.toLowerCase().includes(value.toLowerCase());

    return (
        <Group style={{marginBottom:"50px"}}> 


            <Div>
                {cities.length>0&&
                <CustomSelect
                    value={value}
                    placeholder="Введите название города"
                    searchable
                    options={customSearchOptions()}
                    onInputChange={onCustomSearchInputChange}
                    autoHideScrollbar
                    renderOption={({ option, ...restProps }) => (
                        <CustomSelectOption
                            style={option.value === '0' ? { color: 'var(--vkui--color_background_accent)' } : {}}
                            {...restProps}
                        >
                            {option.label}
                        </CustomSelectOption>
                    )}
                    onChange={onCustomSearchChange}
                />}
            </Div>
            <Div>
                <Button
                    size="l"
                    mode="primary"

                    onClick={() => {

                        send(value)
                    }}
                >
                    Перейти в приложение
                </Button>
            </Div>


        </Group>
    );
};
export default CustomSearchAlgoSelect