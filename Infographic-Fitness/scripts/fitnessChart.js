$(document).ready(function() {
    // Data for male students
    var maleData = [
        { indicator: 'Vital Capacity', description: '1000m Run' },
        { indicator: 'Level of fitness', description: 'Vital capacity' },
        { indicator: 'Pull-ups', description: 'Vital Capacity' }
        
        
    ];

    // Data for female students
    var femaleData = [
        { indicator: 'Vital Capacity', description: 'BMI' },
        { indicator: 'Sit and reach', description: 'BMI' },
        { indicator: 'BMI & One Minute Sit-ups', description: ' Sprint Performance.' },
        
    ];

    // Populate male students table
    maleData.forEach(function(item) {
        $('#maleStudentsTable').append('<tr><td>' + item.indicator + '</td><td>' + item.description + '</td></tr>');
    });

    // Populate female students table
    femaleData.forEach(function(item) {
        $('#femaleStudentsTable').append('<tr><td>' + item.indicator + '</td><td>' + item.description + '</td></tr>');
    });
    
    $('#maleStudentsTable').DataTable({
        "paging": false,  // Disables pagination
        "searching": false, // Disables the search box
        "info": false, // Hides 'Showing 1 to X of X entries' info
        "ordering": false, // Disables column ordering
        "lengthChange": false // Hides entry length dropdown
    });
    $('#femaleStudentsTable').DataTable({
        "paging": false,  // Disables pagination
        "searching": false, // Disables the search box
        "info": false, // Hides 'Showing 1 to X of X entries' info
        "ordering": false, // Disables column ordering
        "lengthChange": false // Hides entry length dropdown
    });
    // Initialize DataTables
    $('#maleStudentsTable').DataTable();
    $('#femaleStudentsTable').DataTable();
    
});