height_m = 1.69;
mass_m = 78;

height_j = 1.95;
mass_j = 92;

BMI_m = mass_m / (height_m * height_m);
BMI_j = mass_j / (height_j * height_j);

markHigherBMI = console.log(max(BMI_j, BMI_m));
