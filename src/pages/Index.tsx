import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Settings" className="h-8 w-8 text-blue-600 mr-3" />
              <span className="text-xl font-bold text-gray-900">МАШКОМПЛЕКТ</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">О нас</a>
              <a href="#catalog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Каталог</a>
              <a href="#production" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Производство</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Связаться</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Производство<br/>
                <span className="text-blue-400">деталей машин</span><br/>
                по индивидуальным заказам
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Высокоточное изготовление деталей любой сложности.
                Современное оборудование и контроль качества.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Icon name="FileText" className="mr-2 h-5 w-5" />
                  Оставить заявку
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                  <Icon name="Phone" className="mr-2 h-5 w-5" />
                  Связаться
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-700 rounded-lg p-8 text-center animate-scale-in">
                <Icon name="Cog" className="h-32 w-32 text-blue-400 mx-auto mb-4" />
                <p className="text-gray-300">Современное производство</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">лет на рынке</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-blue-100">выполненных заказов</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">0.01мм</div>
              <div className="text-blue-100">точность обработки</div>
            </div>
            <div className="animate-fade-in">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">техническая поддержка</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О нашем производстве</h2>
            <p className="text-xl text-gray-600">Современные технологии для создания качественных деталей</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Wrench" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Индивидуальный подход</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Изготавливаем детали по вашим чертежам и техническим требованиям</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Shield" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Контроль качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Многоступенчатая система контроля на каждом этапе производства</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Clock" className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Быстрые сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Оперативное выполнение заказов без потери качества</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Каталог продукции</h2>
            <p className="text-xl text-gray-600">Основные категории деталей, которые мы производим</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Валы и оси', icon: 'Minus', description: 'Производство валов различной сложности' },
              { name: 'Зубчатые колеса', icon: 'Settings', description: 'Шестерни и зубчатые передачи' },
              { name: 'Корпусные детали', icon: 'Box', description: 'Сложные корпусные конструкции' },
              { name: 'Втулки и кольца', icon: 'Circle', description: 'Точеные втулки и уплотнительные кольца' },
              { name: 'Фланцы', icon: 'Disc', description: 'Соединительные фланцы по ГОСТ' },
              { name: 'Спецдетали', icon: 'Puzzle', description: 'Нестандартные детали по чертежам' }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="text-center">
                  <Icon name={item.icon as any} className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{item.description}</p>
                  <Button variant="outline" className="w-full mt-4">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Section */}
      <section id="production" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Наше производство</h2>
            <p className="text-xl text-gray-300">Современное оборудование и технологии</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Токарные станки ЧПУ', count: '12 единиц' },
              { title: 'Фрезерные центры', count: '8 единиц' },
              { title: 'Шлифовальные станки', count: '6 единиц' },
              { title: 'Контрольное оборудование', count: '15 единиц' }
            ].map((item, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
                <Icon name="Factory" className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <Badge variant="secondary" className="bg-blue-600 text-white">{item.count}</Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Техническое задание</h2>
            <p className="text-xl text-gray-600">Опишите детали, которые необходимо изготовить</p>
          </div>
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Форма заказа</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company">Название компании</Label>
                  <Input id="company" placeholder="ООО Ваша компания" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact">Контактное лицо</Label>
                  <Input id="contact" placeholder="Иванов Иван Иванович" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="info@company.ru" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="quantity">Количество деталей</Label>
                <Input id="quantity" placeholder="Укажите необходимое количество" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="material">Материал</Label>
                <Input id="material" placeholder="Сталь 40Х, алюминий, латунь и т.д." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Техническое описание</Label>
                <Textarea 
                  id="description" 
                  placeholder="Подробно опишите деталь: размеры, допуски, особые требования к обработке поверхности, термообработка и т.д."
                  className="min-h-[120px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="drawings">Чертежи и документация</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Icon name="Upload" className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Перетащите файлы сюда или нажмите для выбора</p>
                  <p className="text-sm text-gray-500 mt-2">Поддерживаются: PDF, DWG, STEP, IGS</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">
                  <Icon name="Send" className="mr-2 h-5 w-5" />
                  Отправить заявку
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Settings" className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-xl font-bold">МАШКОМПЛЕКТ</span>
              </div>
              <p className="text-gray-300">Производство деталей машин высокого качества с 2009 года</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Токарная обработка</li>
                <li>Фрезерная обработка</li>
                <li>Шлифование</li>
                <li>Термообработка</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 mr-2" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 mr-2" />
                  <span>info@mashkomplekt.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 mr-2" />
                  <span>Москва, ул. Промышленная, 15</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-300">
                <p>Пн-Пт: 8:00 - 18:00</p>
                <p>Сб: 9:00 - 15:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МАШКОМПЛЕКТ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;