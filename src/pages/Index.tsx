import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles, BookOpen, Heart } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-warm-light to-secondary/40 relative overflow-hidden">
      {/* Magical floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-magic-pink/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-20 w-48 h-48 bg-magic-lavender/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-20 left-1/4 w-44 h-44 bg-magic-blue/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-magic-glow/20 rounded-full blur-3xl animate-sparkle" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Title */}
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-magical animate-shimmer">
              Die Magische Schule
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-medium">
              Ein Abenteuer für Hannah 🌸
            </p>
          </div>

          {/* Main Card */}
          <Card className="p-8 md:p-12 bg-card/90 backdrop-blur-sm shadow-magical border-2 border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-magic-pink via-magic-lavender to-magic-blue rounded-full blur-xl opacity-50 animate-glow-pulse" />
                  <div className="relative bg-gradient-to-br from-primary to-secondary p-6 rounded-full">
                    <Sparkles className="h-16 w-16 text-primary-foreground animate-sparkle" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-foreground/90">
                <p className="text-lg leading-relaxed">
                  Willkommen in einer Schule voller Magie, Freundschaft und Abenteuer! 
                  Begleite Hannah, Katharina und Ken auf ihren Reisen durch geheimnisvolle Orte.
                </p>
                <p className="text-base text-muted-foreground">
                  Entdecke die Flüsternde Bibliothek, den Schwebenden Garten, das Wunschdach 
                  und die Spiegelhalle. Jede Wahl, die du triffst, formt deine Geschichte.
                </p>
              </div>

              <Button
                onClick={() => navigate("/game")}
                size="lg"
                className="w-full md:w-auto px-12 py-6 text-lg bg-gradient-to-r from-primary via-magic-lavender to-accent hover:shadow-magical hover:scale-105 transition-all duration-300 font-bold"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Abenteuer beginnen
              </Button>
            </div>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-magical transition-all duration-300 hover:scale-105 border border-border/50">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-kindness/20">
                  <Heart className="h-6 w-6 text-kindness" />
                </div>
                <h3 className="font-semibold text-foreground">Freundlichkeit</h3>
                <p className="text-sm text-muted-foreground">
                  Deine gütigen Entscheidungen berühren alle Herzen
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-magical transition-all duration-300 hover:scale-105 border border-border/50">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-curiosity/20">
                  <Sparkles className="h-6 w-6 text-curiosity" />
                </div>
                <h3 className="font-semibold text-foreground">Neugier</h3>
                <p className="text-sm text-muted-foreground">
                  Entdecke Geheimnisse und enthülle die Wahrheit
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-magical transition-all duration-300 hover:scale-105 border border-border/50">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 rounded-full bg-courage/20">
                  <BookOpen className="h-6 w-6 text-courage" />
                </div>
                <h3 className="font-semibold text-foreground">Mut</h3>
                <p className="text-sm text-muted-foreground">
                  Stehe mutig vor jedem Abenteuer
                </p>
              </div>
            </Card>
          </div>

          {/* Footer Message */}
          <div className="pt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <Card className="p-6 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 shadow-magical">
              <p className="text-sm text-muted-foreground italic">
                💖 Erstellt mit Liebe für Hannah von ihrem Bruder Tomy 💖
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Alles Gute zum Geburtstag! Du bist das Licht, das die Welt magisch macht. ✨
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
