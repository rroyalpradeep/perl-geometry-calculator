use strict;
use warnings;

use FindBin;
use lib "$FindBin::Bin/lib";

use MyMath::Area qw(circle rectangle triangle square);
use MyMath::Volume qw(cube cuboid sphere cylinder cone);

print "===== AREA CALCULATIONS =====\n";
print "Circle (r=5): ", circle(5), "\n";
print "Rectangle (10x4): ", rectangle(10, 4), "\n";
print "Triangle (b=8, h=6): ", triangle(8, 6), "\n";
print "Square (s=3): ", square(3), "\n\n";

print "===== VOLUME CALCULATIONS =====\n";
print "Cube (s=3): ", cube(3), "\n";
print "Cuboid (10x4x6): ", cuboid(10, 4, 6), "\n";
print "Sphere (r=5): ", sphere(5), "\n";
print "Cylinder (r=3, h=10): ", cylinder(3, 10), "\n";
print "Cone (r=3, h=10): ", cone(3, 10), "\n";