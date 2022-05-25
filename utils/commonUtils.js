import validator from 'validator';

export const commonUtil = Object.freeze({
    isEmpty: (value) => {
        return (value === null || value === undefined
            || (typeof value === 'string' && validator.isEmpty(value, { ignore_whitespace: true }))
            || (typeof value === 'object' && !Object.keys(value).length)
            || (Array.isArray(value) && (!value.length || !Object.keys(value[0]).length))
        );
    },
    isNotEmpty: (value) => {
        return !commonUtil.isEmpty(value);
    },
});

export const commonSelectHandler =(target,setTarget)=>({
    mode: 'checkbox',
    onSelect: (row, isSelect, rowIndex, e) => {
        if(isSelect) {
            setTarget([...target, row.id]);
        } else {
            setTarget(target.filter(id => id !== row.id));
        }
    },
    onSelectAll: (isSelect, rows, e) => {
        if(isSelect) {
            setTarget(rows);
        } else {
            setTarget([]);
        }
    }
})