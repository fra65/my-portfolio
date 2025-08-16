import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Import nuovi array
import { hardSkills } from "@/types/skills/hardSkills";
import { softSkills } from "@/types/skills/softSkills";

function CircularProgress({ value, size = 120 }: { value: number; size?: number }) {
  const radius = (size - 8) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDasharray = `${(value / 100) * circumference} ${circumference}`;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="transform -rotate-90" width={size} height={size}>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          className="text-muted"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth="4"
          fill="transparent"
          strokeDasharray={strokeDasharray}
          className="text-primary transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-foreground">{value}%</span>
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="w-full sm:px-2 md:px-6 lg:px-[10rem] py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">Le mie competenze</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una combinazione di competenze tecniche e soft skills che mi permettono di creare soluzioni complete e
            innovative.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hard Skills */}
          <Card className="animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Competenze Tecniche</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {hardSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="animate-slide-in-right">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8 justify-items-center">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="text-center space-y-3">
                    <CircularProgress value={skill.level} />
                    <p className="font-medium text-foreground">{skill.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
