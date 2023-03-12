from django.db import models

# Create your models here.
class React(models.Model):
    employee = models.CharField(max_length=30)
    department = models.CharField(max_length=200)


class Work(models.Model):
    name_work = models.CharField("Работа", max_length=100)
    # name_department = models.ForeignKey(Department, verbose_name="Цех", on_delete=models.CASCADE, null=True)
    # num_stages_work = models.PositiveSmallIntegerField("Количество этапов (задач), на которое разбивается выполнение работы", default=0, help_text="Укажите в какое количество этапов выполняется работа")

    def __str__(self):
        return self.name_work

    class Meta:
        verbose_name = "Работа"
        verbose_name_plural = "Работы"


class Machine(models.Model):
    name_machine = models.TextField("Машина", max_length=100)
    description = models.TextField("Пояснение")

    def __str__(self):
        return self.name_machine

    class Meta:
        verbose_name = "Машина"
        verbose_name_plural = "Машины"


class Stage(models.Model):
    name_stage = models.CharField("Этап", max_length=100)
    # Время, за которое будет выполняться этот этап
    # work = models.ManyToManyField(Work, verbose_name="Work", through="StageParameters")
    work_id = models.PositiveIntegerField("Job")
    execution_time = models.PositiveIntegerField("Время выполнения")
    priority = models.PositiveIntegerField("Приоритет выполнения")
    machine = models.ForeignKey(Machine, verbose_name="Машина", on_delete=models.CASCADE, null=False)
    
    def str(self):
        return self.name_stage

    class Meta:
        verbose_name = "Этап"
        verbose_name_plural = "Этапы"


class Work(models.Model):
    name_work = models.CharField("Работа", max_length=100)
    release_dates = models.PositiveIntegerField("Release dates", default = 0)
    due_dates = models.PositiveIntegerField("Due dates", default = 0)
    # name_department = models.ForeignKey(Department, verbose_name="Цех", on_delete=models.CASCADE, null=True)
    # num_stages_work = models.PositiveSmallIntegerField("Количество этапов (задач), на которое разбивается выполнение работы", default=0, help_text="Укажите в какое количество этапов выполняется работа")

    def __str__(self):
        return self.name_work

    class Meta:
        verbose_name = "Работа"
        verbose_name_plural = "Работы"
