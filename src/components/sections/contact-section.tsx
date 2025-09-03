/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send } from "lucide-react"
import { contactInfo } from "@/types/contact/contactInfo"
import { socialLinks } from "@/types/contact/socialLinks"
import { useTranslations } from "next-intl"
import Link from "next/link"
import sendEmail from "@/api/sendEmail"

export function ContactSection() {
  const t = useTranslations("ContactSection")

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { id, value } = event.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const data = {
      nome: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      messaggio: `Oggetto: ${formData.subject}\nMessaggio: ${formData.message}`,
    };

    try {
      const response = await sendEmail(data);

      alert(response.message || "Messaggio inviato con successo!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Errore durante l'invio del messaggio");
    }
  }


  return (
    <section
      id="contact"
      className="w-full sm:px-2 md:px-6 lg:px-[10rem] py-20 bg-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">{t("title")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t("Info.title")}
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{t(`Info.${info.key}`)}</p>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.translateValue ? t(`Info.${info.value}`) : info.value}
                        </a>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                {t("Social.title")}
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`w-10 h-10 bg-muted rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {t("ContactBlock.title")}
                </h4>
                <p className="text-muted-foreground mb-4">{t("ContactBlock.subtitle")}</p>
                <Link href="mailto:me.francesco.villani@gmail.com">
                  <Button className="w-full cursor-pointer">
                    {t("ContactBlock.cta")}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-in-right">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle className="text-2xl">{t("Form.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">{t("Form.nameLabel")}</Label>
                    <Input
                      id="firstName"
                      placeholder={t("Form.namePlaceholder")}
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">{t("Form.surnameLabel")}</Label>
                    <Input
                      id="lastName"
                      placeholder={t("Form.surnamePlaceholder")}
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">{t("Form.emailLabel")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("Form.emailPlaceholder")}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">{t("Form.objectLabel")}</Label>
                  <Input
                    id="subject"
                    placeholder={t("Form.objectPlaceholder")}
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("Form.messageLabel")}</Label>
                  <Textarea
                    id="message"
                    placeholder={t("Form.messagePlaceholder")}
                    className="min-h-32"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="mr-2 h-4 w-4" />
                  {t("Form.cta")}
                </Button>

                <p className="text-xs text-muted-foreground text-center">{t("Form.disclaimer")}</p>
              </CardContent>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
