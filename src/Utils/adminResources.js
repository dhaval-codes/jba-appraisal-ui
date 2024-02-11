export const columns = [
    // { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: false,
    },
    {
        field: 'staffCode',
        headerName: 'StaffCode',
        type: 'number',
        width: 100,
        editable: false,
        align: 'center'
    },
    {
        field: 'department',
        headerName: 'Department',
        width: 100,
        editable: false,
        align: 'center'
    },
    {
        field: 'appraisalA1',
        headerName: 'Appraisal A1 filled',
        sortable: false,
        width: 150,
        align: 'center'
    },
    {
        field: 'appraisalC',
        headerName: 'Appraisal C Filled',
        editable: false,
        width: 150,
        align: 'center'
    }
];
  