import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gymSerranoImg from "@/assets/gym-serrano.jpg";
import gymRetiroImg from "@/assets/gym-retiro.jpg";

interface LocationChooserModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const locations = [
  {
    key: "serrano",
    nameKey: "locationChooser.serrano",
    addressKey: "locationChooser.serranoAddress",
    image: gymSerranoImg,
  },
  {
    key: "retiro",
    nameKey: "locationChooser.retiro",
    addressKey: "locationChooser.retiroAddress",
    image: gymRetiroImg,
  },
];

const LocationChooserModal = ({ open, onOpenChange }: LocationChooserModalProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleSelect = (key: string) => {
    onOpenChange(false);
    navigate(`/schedule/${key}`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-card border-border">
        <DialogHeader className="p-6 pb-2">
          <DialogTitle className="font-serif text-2xl text-foreground">
            {t("locationChooser.title")}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {t("locationChooser.subtitle")}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-6 pt-2">
          {locations.map((loc) => (
            <button
              key={loc.key}
              onClick={() => handleSelect(loc.key)}
              className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <img
                src={loc.image}
                alt={t(loc.nameKey)}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
                <h3 className="font-serif text-xl text-white mb-1">
                  {t(loc.nameKey)}
                </h3>
                <p className="text-sm text-white/70">{t(loc.addressKey)}</p>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationChooserModal;
